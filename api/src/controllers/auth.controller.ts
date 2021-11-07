import { User, PrismaClient, Prisma } from "@prisma/client";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ErrorHandlingHelper } from "@helpers";
import { UserNotFoundError, UserWrongPasswordError } from "@errors";

interface IReturnedUser extends User {
  token?: string;
}

export class AuthController {
  prisma = new PrismaClient();

  /**
   * Register a new user
   * @param req - Express request
   * @param res - Express response
   * @returns The created user with associated token as express Response
   */
  async signUp(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    const userCount = await this.prisma.user.count();
    const body: User = req.body;
    body.password = bcrypt.hashSync(body.password, +process.env.SALT_ROUNDS);
    body.admin = userCount === 0 ? true : false; // The first user created shall be admin

    try {
      const user: IReturnedUser = await this.prisma.user.create({
        data: body,
      });

      delete user.password;
      delete user.resetToken;
      user.token = jwt.sign(user, process.env.JWT_SECRET);

      return res.status(201).json({ user });
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }

  /**
   * Login an existing user
   * @param req - Express request
   * @param res - Express response
   * @returns The connected user with the associated token as express Response
   */
  async signIn(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    const email: string = req.body.email;
    const password: string = req.body.password;

    try {
      const user: IReturnedUser = await this.prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new UserNotFoundError();
      }

      if (!bcrypt.compareSync(password, user.password)) {
        throw new UserWrongPasswordError();
      }

      delete user.password;
      delete user.resetToken;
      user.token = jwt.sign(user, process.env.JWT_SECRET);

      return res.status(200).json(user);
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
}
