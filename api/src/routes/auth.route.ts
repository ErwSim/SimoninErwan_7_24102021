import express from "express";
import { AuthController } from "src/controllers";

const authRoute = express.Router();
const authController = new AuthController();

authRoute.post("/signup", authController.signUp);
authRoute.post("/signin", authController.signIn);

export { authRoute };
