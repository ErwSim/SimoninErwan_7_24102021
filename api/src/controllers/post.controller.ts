import express from "express";
import { Post, PrismaClient } from ".prisma/client";
import { ErrorHandlingHelper } from "@helpers";

export class PostController {
  prisma = new PrismaClient();

  /**
   * Create a new post
   * @param req - Express request
   * @param res - Express response
   * @returns The created post as express Response
   */
  async create(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const body: Post = req.body;

      // Used when querying own post
      if (+req.params.userId) {
        body.userId = +req.params.userId;
      }

      // The title cannot be empty if the message is a top level post
      if (!body.title && !body.postId) {
        return res.status(400).json({ e: "postTitleCannotBeEmpty" });
      }

      const post = await this.prisma.post.create({ data: body });

      return res.status(201).json(post);
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }

  /**
   * Get all posts
   * @param req - Express request
   * @param res - Express response
   * @returns All posts as express Response
   */
  async getAll(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const filter = req.filter;
      // Used when querying own post
      if (+req.params.userId) {
        filter.where.userId = +req.params.userId;
      }

      const posts = await this.prisma.post.findMany(filter);

      return res.status(200).json(posts);
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }

  /**
   * Get one post filtered by id
   * @param req - Express request
   * @param res - Express response
   * @returns The requested post as express Response
   */
  async getOne(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const id = +req.params.id;
      const filter = req.filter;
      filter.where = {};
      filter.where.id = id;
      // Used when querying own post
      if (+req.params.userId) {
        filter.where.userId = +req.params.userId;
      }
      const post = await this.prisma.post.findUnique(filter);

      if (!post) {
        return res.status(404).json({ error: "postNotFound" });
      }

      return res.status(200).json(post);
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }

  /**
   * Update one post depending on its id
   * @param req - Express request
   * @param res - Express response
   * @returns The updated post as express Response
   */
  async updateOne(
    req: express.Request,
    res: express.Response
  ): Promise<express.Response> {
    try {
      const id = +req.params.id;
      const body: Partial<Post> = req.body;

      const filter = req.filter;
      filter.where.id = id;
      // Used when querying own post
      if (+req.params.userId) {
        filter.where.userId = +req.params.userId;
      }
      const post = await this.prisma.post.update({
        where: filter.where,
        data: body,
      });

      return res.status(200).json(post);
    } catch (e) {
      const error = new ErrorHandlingHelper(e).prisma();
      return res.status(error.statusCode).json({ error: error.error });
    }
  }

  /**
   * Delete one post depending on its id
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
      let filter: { where: Partial<Post> } = { where: { id } };
      // Used when querying own post
      if (+req.params.userId) {
        filter.where.userId = +req.params.userId;
      }
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
