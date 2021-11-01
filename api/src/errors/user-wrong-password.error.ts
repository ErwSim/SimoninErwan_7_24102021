export class UserWrongPasswordError extends Error {
  constructor() {
    super("userWrongPassword");

    Object.setPrototypeOf(this, UserWrongPasswordError.prototype);
  }
}
