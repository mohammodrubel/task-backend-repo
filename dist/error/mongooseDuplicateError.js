"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongooseDuplicateError = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    // The extracted value will be in the first capturing group
    const extractedMessage = match && match[1];
    const errorSource = [
        {
            path: '',
            message: `${extractedMessage} is already exists`,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        message: 'Validation Error',
        errorSource,
    };
};
exports.default = mongooseDuplicateError;
