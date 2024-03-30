import {Router} from 'express'
import { userRouter } from './auth_Router';
import { ProductRouter } from './product_router';


const router = Router()

    const myRouter = [
        {path:'/auth',route:userRouter},
        {path:'/product',route:ProductRouter},
    ]

    myRouter.forEach((route) => router.use(route.path, route.route));

export default router 