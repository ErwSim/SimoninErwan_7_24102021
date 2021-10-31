import { User, PrismaClient } from "@prisma/client";
import express from "express";
import { ErrorHandlingHelper } from "../helpers";

export class AuthController {
  prisma = new PrismaClient();

  async signUp(req: express.Request, res: express.Response) {
    const body: User = req.body;

    try {
      const user = await this.prisma.user.create({
        data: body,
      });

      return res.status(201).json({ user });
    } catch (e) {
      return ErrorHandlingHelper.prisma(e, res);
    }
  }
}
