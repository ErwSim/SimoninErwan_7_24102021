import { AuthController } from "@controllers";
import express from "express";

const authRoute = express.Router();
const authController = new AuthController();

authRoute.post("/signup", authController.signUp);
authRoute.post("/signin", authController.signIn);

export { authRoute };
