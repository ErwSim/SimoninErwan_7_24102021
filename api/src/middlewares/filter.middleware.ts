import express from "express";

export function filterMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  if (req.query.filter) {
    const { select, where, include } = req.query.filter as any;
    req.filter = {
      select,
      where,
      include,
    };
  }
  next();
}
