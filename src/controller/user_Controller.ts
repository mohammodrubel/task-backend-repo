import httpStatus from "http-status";
import { AuthService } from "../service/user_service";
import catchAsync from "../utils/catchAsync";
import sendResponce from "../utils/send_responce_";
import config from "../config";


const createUserController = catchAsync(async (req,res)=>{
    const result = await AuthService.createService(req.body)
    sendResponce(res,({
        success:true,
        statusCode:httpStatus.CREATED,
        messege: "Create New Successfully",
        data:result
    }))
})
const getAllUserController = catchAsync(async (req,res)=>{
    const result = await AuthService.getAllUsersService()
    sendResponce(res,({
        success:true,
        statusCode:httpStatus.OK,
        messege: "All User Showen Successfully",
        data:result
    }))
})
const getSingleController = catchAsync(async (req,res)=>{
    const {id} = req.params
    const result = await AuthService.getSingleService(id)
    sendResponce(res,({
        success:true,
        statusCode:httpStatus.OK,
        messege: "showen Single User Successfully",
        data:result
    }))
})
const deleteUserController = catchAsync(async (req,res)=>{
    const {id} = req.params
    const result = await AuthService.deleteSingleService(id)
    sendResponce(res,({
        success:true,
        statusCode:httpStatus.OK,
        messege: "Delete Single User Successfully",
        data:result
    }))
})

const loginController = catchAsync(async(req,res)=>{
    const result = await AuthService.loginService(req.body)
    const {accessToken,refreshToken} = result
    res.cookie('refreshToken',refreshToken,{
        secure:config.node_env === 'production',
        httpOnly:true 
    })
    sendResponce(res,({
        success:true,
        statusCode:httpStatus.OK,
        messege: "Login Successfull",
        data: {accessToken:accessToken}
    }))
})
const refreshTokenControler = catchAsync(async(req,res)=>{
    const {refreshToken}=req.cookies
    console.log(req.cookies)
    const result = await AuthService.refreshTokenService(refreshToken)
    
    sendResponce(res,{
        statusCode:httpStatus.OK,
        success:true,
        messege:'AccessToken retrived successfully',
        data:result
    })
})



export const AuthController = {
    createUserController,
    getAllUserController,
    getSingleController,
    deleteUserController,
    loginController,
    refreshTokenControler
}