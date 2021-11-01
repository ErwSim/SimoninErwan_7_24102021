import "module-alias/register";
import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { loggerMiddleware } from "@middlewares";
import { authRoute, userRoute } from "@routes";

dotenv.config();

export function main() {
  const app = express();
  const port = +process.env.APP_PORT || 3000;

  // Middlewares
  app.use(cors());
  app.use(express.json());
  app.use("/images", express.static(path.join(__dirname, "images")));

  // Custom Middlewares
  app.use(loggerMiddleware);

  // Routes
  app.use("/auth", authRoute);
  app.use("/users", userRoute);

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });

  return app;
}

if (require.main === module) {
  main();
}
