import { Prisma } from ".prisma/client";

export class ErrorHandlingHelper {
  e: unknown;

  constructor(e: unknown) {
    this.e = e;
  }
  /**
   * Handle error codes thrown by Prisma
   * @returns - An object with statusCode and error message
   */
  prisma(): { statusCode: number; error: string } {
    if (this.e instanceof Prisma.PrismaClientKnownRequestError) {
      let statusCode: number;
      let error: string;
      switch (this.e.code) {
        case "P2000":
        case "P2016":
          statusCode = 422;
          error = "dbUnprocessable";
          break;

        case "P2001":
        case "P2015":
          statusCode = 404;
          error = "dbItemNotFound";
          break;

        case "P2002":
          statusCode = 409;
          error = "dbDuplicates";
          break;

        case "P2003":
          statusCode = 500;
          error = "dbFkFailed";
          break;

        case "P2004":
          statusCode = 500;
          error = "dbConstraintFailed";
          break;

        case "P2005":
        case "P2006":
        case "P2007":
        case "P2008":
        case "P2009":
        case "P2012":
        case "P2013":
        case "P2014":
          statusCode = 400;
          error = "dbBadRequest";
          break;

        case "P2010":
          statusCode = 500;
          error = "dbRawQueryFailed";
          break;

        case "P2011":
          statusCode = 500;
          error = "dbNullConstraintViolation";
          break;

        default:
          statusCode = 500;
          error = "unknownError";
          break;
      }

      return { statusCode, error };
    }
  }
}
