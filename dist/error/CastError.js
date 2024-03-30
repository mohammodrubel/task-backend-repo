"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CastError = (err) => {
    const errorSource = [
        {
            path: err.path,
            message: err.message,
        },
    ];
    const statusCode = 400;
    // Returning a custom error object
    return {
        statusCode,
        message: 'Invalid Id',
        errorSource,
    };
};
exports.default = CastError;
