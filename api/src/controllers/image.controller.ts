import express from "express";
import { PrismaClient, Image } from ".prisma/client";
import { ErrorHandlingHelper } from "@helpers";

export class ImageController {
  prisma = new PrismaClient();

  /**
   * Create a new image
   * @param req - Express request
   * @param res - Express response
   * @returns The created image as express Response
   */
  async create(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const body = {
        uri: req.file.path,
        description: req.body.description,
      };
      const image = await this.prisma.image.create({ data: body });

      return res.status(201).json(image);
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }
}
