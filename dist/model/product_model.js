"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    completed: {
        type: String,
        enum: ['APPROVED', 'PENDING'],
        default: 'PENDING'
    },
    orderDate: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
}, { timestamps: true });
exports.Product = (0, mongoose_1.model)('Product', productSchema);
