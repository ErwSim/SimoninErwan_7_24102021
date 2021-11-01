import { UserController } from "@controllers";
import express from "express";

const route = express.Router();
const controller = new UserController();

route.put("/user/:id/password", controller.changePassword.bind(controller));

export const userRoute = route;
