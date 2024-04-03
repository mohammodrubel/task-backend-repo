"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_Router_1 = require("./auth_Router");
const product_router_1 = require("./product_router");
const router = (0, express_1.Router)();
const myRouter = [
    { path: '/auth', route: auth_Router_1.userRouter },
    { path: '/product', route: product_router_1.ProductRouter },
];
myRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
