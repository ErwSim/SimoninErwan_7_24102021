import { GlobalService } from ".";

export class UserService extends GlobalService {
  constructor() {
    super("users/");
  }

  async checkUserExists(email) {
    try {
      const response = await this.api.head(email);
      if (response.status === 200) {
        return true;
      }

      return false;
    } catch (e) {
      if (e.status === 404) {
        return false;
      }

      throw e;
    }
  }
}
