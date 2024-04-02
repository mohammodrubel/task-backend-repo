import httpStatus from "http-status";
import { productService } from "../service/product_service";
import catchAsync from "../utils/catchAsync";
import sendResponce from "../utils/send_responce_";

const createNewProduct = catchAsync(async(req,res,next)=>{
    const result = await productService.createProductService(req.body)
    sendResponce(res,{
        statusCode:httpStatus.CREATED,
        success:true,
        messege:'create new product successfully',
        data:result
    })
})
const getAllProduct = catchAsync(async(req,res,next)=>{
    const result = await productService.getAllProductService(req.query)
    sendResponce(res,{
        statusCode:httpStatus.OK,
        success:true,
        messege:'get all show product successfully',
        data:result
    })
})
const updateProduct = catchAsync(async(req,res,next)=>{
    const id = req?.params?.id
    const body = req.body
    const result = await productService.updateProductService(id,body)
    sendResponce(res,{
        statusCode:httpStatus.OK,
        success:true,
        messege:'updated product successfully',
        data:result
    })
})
const deleteProduct = catchAsync(async(req,res,next)=>{
    const id = req?.params?.id
    const result = await productService.deleteProductService(id)
    sendResponce(res,{
        statusCode:httpStatus.OK,
        success:true,
        messege:'delete product successfully',
        data:result
    })
})

export const ProductController = {
    createNewProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
}