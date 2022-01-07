import express from "express";

export function ownMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    console.log(req.params, req.userId);
    if (+req.params.userId === req.userId) {
      next();
    } else {
      throw new Error("permissionDenied");
    }
  } catch (e) {
    return res.status(403).json({ error: e.message });
  }
}
