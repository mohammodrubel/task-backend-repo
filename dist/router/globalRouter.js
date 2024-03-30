"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_Router_1 = require("./auth_Router");
const router = (0, express_1.Router)();
const myRouter = [
    { path: '/auth', route: auth_Router_1.userRouter },
];
myRouter.forEach((route) => router.use(route.path, route.route));
exports.default = router;
