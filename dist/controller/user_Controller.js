"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_service_1 = require("../service/user_service");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const send_responce_1 = __importDefault(require("../utils/send_responce_"));
const config_1 = __importDefault(require("../config"));
const createUserController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.AuthService.createService(req.body);
    (0, send_responce_1.default)(res, ({
        success: true,
        statusCode: http_status_1.default.CREATED,
        messege: "Create New Successfully",
        data: result
    }));
}));
const getAllUserController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.AuthService.getAllUsersService();
    (0, send_responce_1.default)(res, ({
        success: true,
        statusCode: http_status_1.default.OK,
        messege: "All User Showen Successfully",
        data: result
    }));
}));
const getSingleController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_service_1.AuthService.getSingleService(id);
    (0, send_responce_1.default)(res, ({
        success: true,
        statusCode: http_status_1.default.OK,
        messege: "showen Single User Successfully",
        data: result
    }));
}));
const deleteUserController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield user_service_1.AuthService.deleteSingleService(id);
    (0, send_responce_1.default)(res, ({
        success: true,
        statusCode: http_status_1.default.OK,
        messege: "showen Single User Successfully",
        data: result
    }));
}));
const loginController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.AuthService.loginService(req.body);
    const { accessToken, refreshToken } = result;
    res.cookie('refreshToken', refreshToken, {
        secure: config_1.default.node_env === 'production',
        httpOnly: true
    });
    console.log(result);
    (0, send_responce_1.default)(res, ({
        success: true,
        statusCode: http_status_1.default.OK,
        messege: "Login Successfull",
        data: { accessToken: accessToken }
    }));
}));
const refreshTokenControler = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    console.log(req.cookies);
    const result = yield user_service_1.AuthService.refreshTokenService(refreshToken);
    (0, send_responce_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        messege: 'AccessToken retrived successfully',
        data: result
    });
}));
exports.AuthController = {
    createUserController,
    getAllUserController,
    getSingleController,
    deleteUserController,
    loginController,
    refreshTokenControler
};
