import httpStatus from "http-status";
import AppError from "../error/AppError";
import catchAsync from "../utils/catchAsync";
import { Request, NextFunction, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from "../config";
import { T_user_role } from '../utils/globalInterface';



const auth = (...requiredRoles:T_user_role[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // if the token send from client site 
    const token = req.headers.authorization
      if(!token){
        throw new AppError(httpStatus.UNAUTHORIZED,'you are not Authorized')
      }
    // if the token is valid 
    jwt.verify(token,config.access_token as string,function(err,decoded){
      if(err){
        throw new AppError(httpStatus.UNAUTHORIZED,'you are not Authorized')
      }

      if(requiredRoles && !requiredRoles.includes((decoded as JwtPayload)?.role)){
        throw new AppError(httpStatus.UNAUTHORIZED,'you are not Authorized')
      }

      req.user =  decoded as JwtPayload
      next()
    })
  });
};

export default auth;
