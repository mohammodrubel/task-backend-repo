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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const product_model_1 = require("../model/product_model");
const createProductService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield product_model_1.Product.create(payload);
    return reuslt;
});
const getAllProductService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    let searchTerm = '';
    let cloneQuery = Object.assign({}, query);
    let sort = '-createdAt';
    let limit = 5;
    let page = 1;
    let skip = 0;
    let fields = '-__v';
    const productSearchFields = ['completed', 'name', 'orderDate'];
    if (query.searchTerm) {
        searchTerm = query.searchTerm;
    }
    const searchQueryData = product_model_1.Product.find({
        $or: productSearchFields.map((field) => ({
            [field]: { $regex: searchTerm, $options: 'i' },
        })),
    });
    const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
    excludeFields.forEach((element) => delete cloneQuery[element]);
    const filterQuery = searchQueryData.find(cloneQuery);
    if (query.sort) {
        sort = query.sort;
    }
    const sortQuery = filterQuery.sort(sort);
    if (query.limit) {
        limit = Number(query.limit);
    }
    if (query.page) {
        page = Number(query.page);
        skip = (page - 1) * limit;
    }
    const paginationQuery = sortQuery.skip(skip);
    const limitQuery = paginationQuery.limit(limit);
    if (query.fields) {
        fields = (_a = query.fields) === null || _a === void 0 ? void 0 : _a.split(',').join(' ');
    }
    const TotalCount = yield product_model_1.Product.countDocuments();
    const result = yield limitQuery.select(fields);
    return {
        result,
        metaData: {
            TotalCount,
            limit,
            page,
            skip,
        },
    };
});
const updateProductService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield product_model_1.Product.findByIdAndUpdate(id, payload, { new: true });
    return reuslt;
});
const approvedProductService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield product_model_1.Product.findByIdAndUpdate(id, payload, { new: true });
    return reuslt;
});
const deleteProductService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const reuslt = yield product_model_1.Product.findByIdAndDelete(id);
    return reuslt;
});
exports.productService = {
    createProductService,
    getAllProductService,
    updateProductService,
    deleteProductService,
    approvedProductService
};
