import { ImageController } from "@controllers";
import { authMiddleware } from "@middlewares";
import express from "express";
import multer from "multer";

const route = express.Router();
const controller = new ImageController();
const upload = multer({
  dest: "images/",
  fileFilter: (
    req: express.Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
  ) => {
    const acceptedMimes = [
      "image/png",
      "image/jpg",
      "image/jpeg",
      "image/gif",
      "image/bmp",
      "image/webp",
    ];

    if (acceptedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("onlyImageFormatAllowed"));
    }
  },
});

route.post(
  "/",
  authMiddleware,
  upload.single("image"),
  controller.create.bind(controller)
);

export const imageRoute = route;
