"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const productValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        completed: zod_1.z.string().default('PENDING'),
        orderDate: zod_1.z.string(),
        price: zod_1.z.number(),
    }),
});
exports.default = productValidation;
