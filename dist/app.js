"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalRouter_1 = __importDefault(require("./router/globalRouter"));
const Global_Error_1 = __importDefault(require("./error/Global_Error"));
const app = (0, express_1.default)();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to chat application',
    });
});
app.use('/api/v1', globalRouter_1.default);
app.use(Global_Error_1.default);
exports.default = app;
