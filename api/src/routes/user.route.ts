import { UserController } from "@controllers";
import { authMiddleware, ownMiddleware } from "@middlewares";
import express from "express";

const route = express.Router();
const controller = new UserController();

route.put("/:id/password", controller.changePassword.bind(controller));
route.head("/:email", controller.userHead.bind(controller));
route.delete(
  "/:userId",
  authMiddleware,
  ownMiddleware,
  controller.deleteOne.bind(controller)
);

export const userRoute = route;
