import { UserPostVoteController } from "@controllers";
import express from "express";

const route = express.Router();
const controller = new UserPostVoteController();

route.put("/users/:userId/posts/:postId", controller.link.bind(controller));
route.delete(
  "/users/:userId/posts/:postId",
  controller.unlink.bind(controller)
);
route.put("/posts/:postsId/users/:userId", controller.link.bind(controller));
route.delete(
  "/posts/:postsId/users/:userId",
  controller.unlink.bind(controller)
);

export const userPostVoteRoute = route;
