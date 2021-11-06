import { PostController } from "@controllers";
import { adminMiddleware } from "@middlewares";
import express from "express";

const route = express.Router();
const controller = new PostController();

route.get("/", controller.getAll.bind(controller));
route.get("/:id", controller.getOne.bind(controller));
route.post("/", controller.create.bind(controller));
route.patch("/:id", controller.updateOne.bind(controller));
route.delete("/:id", controller.deleteOne.bind(controller));

export const userPostRoute = route;
