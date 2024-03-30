"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync = (myFunction) => {
    return (req, res, next) => {
        Promise.resolve(myFunction(req, res, next)).catch((err) => next(err));
    };
};
exports.default = catchAsync;
