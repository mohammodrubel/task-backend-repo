import { ProductType } from "../Interface/product_interface"
import { Product } from "../model/product_model"

const createProductService = async(payload:ProductType)=>{
    const reuslt = await Product.create(payload)
    return reuslt
}
const getAllProductService = async()=>{
    const reuslt = await Product.find({})
    return reuslt
}
const updateProductService = async(id:string,payload:Partial<ProductType>)=>{
    const reuslt = await Product.findByIdAndUpdate(id,payload,{new:true})
    return reuslt
}
const deleteProductService = async(id:string)=>{
    const reuslt = await Product.findByIdAndDelete(id)
    return reuslt
}

export const productService = {
    createProductService,
    getAllProductService,
    updateProductService,
    deleteProductService
}