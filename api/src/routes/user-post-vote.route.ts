import { UserPostVoteController } from "@controllers";
import express from "express";

const route = express.Router();
const controller = new UserPostVoteController();

route.get("/posts/:postId", controller.getVotesOnPost.bind(controller));
route.put("/posts/:postId/users/:userId", controller.link.bind(controller));
route.delete(
  "/posts/:postId/users/:userId",
  controller.unlink.bind(controller)
);

export const userPostVoteRoute = route;
