import { model, Schema } from "mongoose";
import { ProductType } from "../Interface/product_interface";

const productSchema = new Schema<ProductType>({
    name:{
        type:String,
        required:true,
    },
    completed:{
        type:String,
        enum:['APPROVED', 'PENDING'],
        default:'PENDING'
    },
    orderDate:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
},{ timestamps: true })

export const Product = model<ProductType>('Product',productSchema)