"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongooseValidationError = (err) => {
    const errorSource = Object.values(err.errors).map((vel) => {
        return {
            path: vel === null || vel === void 0 ? void 0 : vel.path,
            message: vel === null || vel === void 0 ? void 0 : vel.message,
        };
    });
    const statusCode = 400;
    // Returning a custom error object
    return {
        statusCode,
        message: 'Validation Error',
        errorSource,
    };
};
exports.default = mongooseValidationError;
