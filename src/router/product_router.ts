import express from 'express'
import { ProductController } from '../controller/product_Controller'
import validateRequest from '../Middleware/Check_Validation'
import productValidation from '../validation/product_Validation'
const router = express.Router()

router.post(
  '/create-product',
  validateRequest(productValidation),
  ProductController.createNewProduct,
)

router.get(
  '/',
  ProductController.getAllProduct,
)
router.put(
  '/:id',
  ProductController.updateProduct,
)

router.delete(
  '/:id',
  ProductController.deleteProduct,
)

export const ProductRouter = router
