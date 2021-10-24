import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

export function main() {
  const app = express();
  const port = process.env.APP_PORT || 3000;

  // Middlewares
  app.use(cors());
  app.use(express.json());
  app.use("/images", express.static(path.join(__dirname, "images")));

  // Routes

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });

  return app;
}

if (require.main === module) {
  main();
}
