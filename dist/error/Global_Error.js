"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const zod_error_1 = __importDefault(require("./zod_error"));
const config_1 = __importDefault(require("../config"));
const mongooose_Error_1 = __importDefault(require("./mongooose_Error_"));
const CastError_1 = __importDefault(require("./CastError"));
const mongooseDuplicateError_1 = __importDefault(require("./mongooseDuplicateError"));
const AppError_1 = __importDefault(require("./AppError"));
const mongoose_1 = require("mongoose");
const globalError = (err, req, res, next) => {
    let statusCode = 500;
    let message = 'somthing went wrong';
    let errorSource = [
        {
            path: '',
            message: 'somthing went wrong',
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const simplifiedData = (0, zod_error_1.default)(err);
        statusCode = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.statusCode;
        message = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.message;
        errorSource = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.errorSource;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        const simplifiedData = (0, mongooose_Error_1.default)(err);
        statusCode = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.statusCode;
        message = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.message;
        errorSource = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.errorSource;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'CastError') {
        const simplifiedData = (0, CastError_1.default)(err);
        statusCode = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.statusCode;
        message = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.message;
        errorSource = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.errorSource;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        const simplifiedData = (0, mongooseDuplicateError_1.default)(err);
        statusCode = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.statusCode;
        message = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.message;
        errorSource = simplifiedData === null || simplifiedData === void 0 ? void 0 : simplifiedData.errorSource;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        message = err === null || err === void 0 ? void 0 : err.message;
        errorSource = [
            {
                path: '',
                message: err === null || err === void 0 ? void 0 : err.message,
            },
        ];
    }
    else if (err instanceof mongoose_1.Error) {
        ;
        (message = err === null || err === void 0 ? void 0 : err.message),
            (errorSource = [
                {
                    path: '',
                    message: err === null || err === void 0 ? void 0 : err.message,
                },
            ]);
    }
    // final return
    return res.status(statusCode).json({
        success: false,
        message,
        errorSource,
        stack: config_1.default.node_env === 'development' ? err === null || err === void 0 ? void 0 : err.stack : null,
        error: err,
    });
};
exports.default = globalError;
