"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_Controller_1 = require("../controller/product_Controller");
const Check_Validation_1 = __importDefault(require("../Middleware/Check_Validation"));
const product_Validation_1 = __importDefault(require("../validation/product_Validation"));
const router = express_1.default.Router();
router.post('/create-product', (0, Check_Validation_1.default)(product_Validation_1.default), product_Controller_1.ProductController.createNewProduct);
router.get('/', product_Controller_1.ProductController.getAllProduct);
router.put('/:id', product_Controller_1.ProductController.updateProduct);
router.patch('/:id', product_Controller_1.ProductController.approvedProduct);
router.delete('/:id', product_Controller_1.ProductController.deleteProduct);
exports.ProductRouter = router;
