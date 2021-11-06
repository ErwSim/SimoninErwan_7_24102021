import { PrismaClient } from ".prisma/client";
import { ErrorHandlingHelper } from "@helpers";
import express from "express";

export class UserPostVoteController {
  prisma = new PrismaClient();

  /**
   * Create a vote - It will delete existing vote for the user and the post
   * @param req - Express request
   * @param res - Express response
   * @returns No content
   */
  async link(req: express.Request, res: express.Response) {
    try {
      const userId = +req.params.userId;
      const postId = +req.params.postId;
      const type = req.body.type;

      await this.prisma.userPostVote.delete({
        where: { postId_userId: { userId, postId } },
      }); // Delete previously created vote
      await this.prisma.userPostVote.create({ data: { userId, postId, type } });

      return res.status(204).send();
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }

  /**
   * Delete a vote
   * @param req - Express request
   * @param res - Express response
   * @returns No content
   */
  async unlink(req: express.Request, res: express.Response) {
    try {
      const userId = +req.params.userId;
      const postId = +req.params.postId;

      await this.prisma.userPostVote.delete({
        where: { postId_userId: { userId, postId } },
      });

      return res.status(204).send();
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }
}
