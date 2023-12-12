import { Router } from "express";
import authController from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createUser } from "../schemas/validation/createUser.js";
import { authUser } from "../schemas/validation/authUser.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
const authRouter = Router();

authRouter.post('/signup',
    validationSchemaMiddleware(createUser),
    authController.signup
    );
authRouter.post('/signin', 
    validationSchemaMiddleware(authUser),
    authController.signin
    );
authRouter.get('/me',authMiddleware, authController.userLogged);

export default authRouter
