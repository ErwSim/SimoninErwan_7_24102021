import { PostController } from "@controllers";
import { adminMiddleware } from "@middlewares";
import express from "express";

const route = express.Router();
const controller = new PostController();

route.get("/", controller.getAll.bind(controller));
route.get("/:id", controller.getOne.bind(controller));
route.get("/:id/users", controller.getOneWithUsers.bind(controller));
route.post("/", controller.create.bind(controller));
route.patch("/:id", adminMiddleware, controller.updateOne.bind(controller));
route.delete("/:id", adminMiddleware, controller.deleteOne.bind(controller));

export const postRoute = route;
