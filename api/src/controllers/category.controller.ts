import express from "express";
import { Category, Prisma, PrismaClient } from ".prisma/client";
import { ErrorHandlingHelper } from "@helpers";

export class CategoryController {
  prisma = new PrismaClient();

  /**
   * Create a new category
   * @param req - Express request
   * @param res - Express response
   * @returns The created category as express Response
   */
  async create(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const body: Category = req.body;

      const category = await this.prisma.category.create({ data: body });

      return res.status(201).json(category);
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }

  /**
   * Get all categories
   * @param req - Express request
   * @param res - Express response
   * @returns All categories as express Response
   */
  async getAll(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const categories = await this.prisma.category.findMany(req.filter);

      return res.status(200).json(categories);
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }

  /**
   * Get one category filtered by id
   * @param req - Express request
   * @param res - Express response
   * @returns The requested category as express Response
   */
  async getOne(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const id = +req.params.id;
      const filter = req.filter;
      filter.where.id = id;
      const category = await this.prisma.category.findUnique(filter);

      if (!category) {
        return res.status(404).json({ error: "categoryNotFound" });
      }

      return res.status(200).json(category);
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }

  /**
   * Update one category depending on its id
   * @param req - Express request
   * @param res - Express response
   * @returns The updated category as express Response
   */
  async updateOne(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const id = +req.params.id;
      const body: Partial<Category> = req.body;
      const category = await this.prisma.category.update({
        where: { id },
        data: body,
      });

      return res.status(200).json(category);
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }

  /**
   * Delete one category depending on its id
   * @param req - Express request
   * @param res - Express response
   * @returns Empty content
   */
  async deleteOne(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const id = +req.params.id;
      await this.prisma.category.delete({
        where: { id },
      });

      return res.status(204).send();
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }
}
