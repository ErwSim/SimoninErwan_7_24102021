import express from "express";

export function adminMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    if (req.admin === true) {
      next();
    } else {
      throw new Error("permissionDenied");
    }
  } catch (e) {
    return res.status(403).json({ error: e.message });
  }
}
