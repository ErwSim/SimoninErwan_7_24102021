import { AuthController } from "@controllers";
import express from "express";

const route = express.Router();
const controller = new AuthController();

route.post("/signup", controller.signUp.bind(controller));
route.post("/signin", controller.signIn.bind(controller));

export const authRoute = route;
