import express from "express";

export class ErrorHandlingHelper {
  static prisma(e: any, res: express.Response) {
    let statusCode: number;
    let error: string;
    switch (e.code) {
      case "P1000":
        statusCode = 500;
        error = "databaseAuthError";
        break;
      case "P1001":
        statusCode = 500;
        error = "databaseCannotBeJoined";
      default:
        statusCode = 500;
        error = "unknownError";
    }

    return res.status(statusCode).json({ error });
  }
}
