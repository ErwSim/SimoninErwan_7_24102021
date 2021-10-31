import { User, PrismaClient, Prisma } from "@prisma/client";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ErrorHandlingHelper } from "src/helpers";

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
    const body: User = req.body;
    body.password = bcrypt.hashSync(body.password, process.env.SALT_ROUNDS);

    try {
      const user: User & { token?: string } = await this.prisma.user.create({
        data: body,
      });

      user.token = jwt.sign(user, process.env.JWT_SECRET);
      delete user.password;

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
      const user: User & { token?: string } = await this.prisma.user.findUnique(
        { where: { email } }
      );

      if (!user) {
        throw new Error("userNotFound");
      }

      if (!bcrypt.compareSync(password, user.password)) {
        throw new Error("wrongPassword");
      }

      user.token = jwt.sign(user, process.env.JWT_SECRET);
      delete user.password;

      return res.status(200).json(user);
    } catch (e) {
      // Prisma errors
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        const error = new ErrorHandlingHelper(e).prisma();
        return res.status(error.statusCode).json({ error: error.error });
      }

      // Custom errors
      if (e instanceof Error) {
        if (e.message === "userNotFound") {
          return res.status(404).json({ error: e.message });
        } else if (e.message === "wrongPassword") {
          return res.status(401).json({ error: e.message });
        }
      }
    }
  }
}
