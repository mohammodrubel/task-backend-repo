"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const UserSchemaValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string()
            .email({ message: 'Invalid email format' })
            .min(1, { message: 'Email is required' }),
        password: zod_1.z.string().min(1, { message: 'Password is required' }),
        isDeleted: zod_1.z.boolean().default(false),
        role: zod_1.z.enum(['Admin', 'User', 'Modarator']),
    }),
});
exports.default = UserSchemaValidation;
