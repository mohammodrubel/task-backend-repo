import { ProductType } from '../Interface/product_interface'
import { Product } from '../model/product_model'

const createProductService = async (payload: ProductType) => {
  const reuslt = await Product.create(payload)
  return reuslt
}
const getAllProductService = async (query: Record<string, unknown>) => {
  let searchTerm = ''
  let cloneQuery = { ...query }
  let sort = '-createdAt'
  let limit = 8
  let page = 1
  let skip = 0
  let fields = '-__v'

  const productSearchFields = ['completed', 'name', 'orderDate']
  if (query.searchTerm) {
    searchTerm = query.searchTerm as string
  }
  const searchQueryData = Product.find({
    $or: productSearchFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  })

  const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields']
  excludeFields.forEach((element) => delete cloneQuery[element])

  const filterQuery = searchQueryData.find(cloneQuery)

  if (query.sort) {
    sort = query.sort as string
  }

  const sortQuery = filterQuery.sort(sort)

  if (query.limit) {
    limit = Number(query.limit)
  }

  if (query.page) {
    page = Number(query.page)
    skip = (page - 1) * limit
  }

  const paginationQuery = sortQuery.skip(skip)
  const limitQuery = paginationQuery.limit(limit)

  if (query.fields) {
    fields = (query.fields as string)?.split(',').join(' ')
  }
  const TotalCount = await Product.countDocuments()

  const result = await limitQuery.select(fields)
  return {
    result,
    metaData: {
      TotalCount,
      limit,
      page,
      skip,
    },
  }
}
const updateProductService = async (
  id: string,
  payload: Partial<ProductType>,
) => {
  const reuslt = await Product.findByIdAndUpdate(id, payload, { new: true })
  return reuslt
}
const deleteProductService = async (id: string) => {
  const reuslt = await Product.findByIdAndDelete(id)
  return reuslt
}

export const productService = {
  createProductService,
  getAllProductService,
  updateProductService,
  deleteProductService,
}
