"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const product_service_1 = require("../service/product_service");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const send_responce_1 = __importDefault(require("../utils/send_responce_"));
const createNewProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productService.createProductService(req.body);
    (0, send_responce_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        messege: 'create new product successfully',
        data: result
    });
}));
const getAllProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productService.getAllProductService(req.query);
    (0, send_responce_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        messege: 'get all show product successfully',
        data: result
    });
}));
const updateProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    const body = req.body;
    const result = yield product_service_1.productService.updateProductService(id, body);
    (0, send_responce_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        messege: 'updated product successfully',
        data: result
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
    const result = yield product_service_1.productService.deleteProductService(id);
    (0, send_responce_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        messege: 'delete product successfully',
        data: result
    });
}));
const approvedProduct = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = (_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id;
    const data = req === null || req === void 0 ? void 0 : req.body;
    const result = yield product_service_1.productService.approvedProductService(id, data);
    (0, send_responce_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        messege: 'Product Approved successfully',
        data: result
    });
}));
exports.ProductController = {
    createNewProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    approvedProduct
};
