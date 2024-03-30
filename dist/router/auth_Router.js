"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_Controller_1 = require("../controller/user_Controller");
const Check_Validation_1 = __importDefault(require("../Middleware/Check_Validation"));
const user_zod_validation_1 = __importDefault(require("../validation/user_zod_validation_"));
const user_zod_login_validation_1 = __importDefault(require("../validation/user_zod_login_validation"));
const router = express_1.default.Router();
router.post('/create-user', (0, Check_Validation_1.default)(user_zod_validation_1.default), user_Controller_1.AuthController.createUserController);
router.post('/login', (0, Check_Validation_1.default)(user_zod_login_validation_1.default), user_Controller_1.AuthController.loginController);
router.get('/user', user_Controller_1.AuthController.getAllUserController);
router.get('/user/:id', user_Controller_1.AuthController.getSingleController);
router.delete('/user/:id', user_Controller_1.AuthController.deleteUserController);
router.post('/refresh-token', user_Controller_1.AuthController.refreshTokenControler);
exports.userRouter = router;
