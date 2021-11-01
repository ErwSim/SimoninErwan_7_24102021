import { User } from ".prisma/client";
import express from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const [authType, token] = req.headers.authorization.split(" ");

    if (authType === "Bearer") {
      const decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET
      ) as jwt.JwtPayload & Partial<User>;
      const userId = decodedToken.id;
      const admin = decodedToken.admin;

      req.userId = userId;
      req.admin = admin;
      next();
    } else {
      throw new Error("InvalidAuthorizationHeader");
    }
  } catch (e) {
    return res.status(401).json({ e });
  }
}
