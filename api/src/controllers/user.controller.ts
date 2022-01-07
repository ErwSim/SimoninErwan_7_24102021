import { PrismaClient, Prisma, User } from "@prisma/client";
import express from "express";
import bcrypt from "bcrypt";
import { UserNotFoundError, UserWrongPasswordError } from "@errors";
import { ErrorHandlingHelper } from "@helpers";

interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}

export class UserController {
  prisma = new PrismaClient();

  /**
   * Change user password
   * @param req - Express request
   * @param res - Express response
   * @returns No content
   */
  async changePassword(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const userId = +req.params.id;
      const oldNew: IChangePassword = req.body;

      const user = await this.prisma.user.findUnique({ where: { id: userId } });

      if (!user) {
        throw new UserNotFoundError();
      }

      if (!bcrypt.compareSync(oldNew.oldPassword, user.password)) {
        throw new UserWrongPasswordError();
      }

      await this.prisma.user.update({
        where: { id: userId },
        data: {
          password: bcrypt.hashSync(
            oldNew.newPassword,
            +process.env.SALT_ROUNDS
          ),
        },
      });

      return res.status(204).send();
    } catch (e) {
      // Prisma errors
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        const error = new ErrorHandlingHelper(e).prisma();
        return res.status(error.statusCode).json({ error: error.error });
      }

      // Custom errors
      if (e instanceof UserNotFoundError) {
        return res.status(404).json({ error: e.message });
      }

      if (e instanceof UserWrongPasswordError) {
        return res.status(401).json({ error: e.message });
      }
    }
  }

  /**
   * Check user existence
   * @param req - Express request
   * @param res - Express response
   * @returns No content
   */
  async userHead(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const email = req.params.email;

      const user = await this.prisma.user.count({ where: { email } });

      if (user === 0) {
        throw new UserNotFoundError();
      }

      return res.status(200).send();
    } catch (e) {
      // Prisma errors
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        const error = new ErrorHandlingHelper(e).prisma();
        return res.status(error.statusCode).json({ error: error.error });
      }

      // Custom errors
      if (e instanceof UserNotFoundError) {
        return res.status(404).json({ error: e.message });
      }

      if (e instanceof UserWrongPasswordError) {
        return res.status(401).json({ error: e.message });
      }
    }
  }

  /**
   * Delete one user depending on its id
   * @param req - Express request
   * @param res - Express response
   * @returns Empty content
   */
  async deleteOne(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const id = +req.params.userId;
      let filter: { where: Partial<User> } = { where: { id } };
      await this.prisma.post.delete({
        where: filter.where,
      });

      return res.status(204).send();
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }
}
