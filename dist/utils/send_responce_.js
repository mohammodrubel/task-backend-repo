"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponce = (res, data) => {
    res.status(data === null || data === void 0 ? void 0 : data.statusCode).json({
        success: data === null || data === void 0 ? void 0 : data.success,
        statusCode: data === null || data === void 0 ? void 0 : data.statusCode,
        messege: data === null || data === void 0 ? void 0 : data.messege,
        data: data,
    });
};
exports.default = sendResponce;
