export {};

declare global {
  namespace Express {
    interface Request {
      userId?: number;
      admin?: boolean;
      filter?: any;
    }
  }
}
