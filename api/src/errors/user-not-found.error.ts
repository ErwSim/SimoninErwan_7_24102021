export class UserNotFoundError extends Error {
  constructor() {
    super("userNotFound");

    Object.setPrototypeOf(this, UserNotFoundError.prototype);
  }
}
