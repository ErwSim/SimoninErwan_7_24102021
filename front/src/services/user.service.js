import { GlobalService } from ".";

export class UserService extends GlobalService {
  constructor() {
    super("users/");
  }

  /**
   * Check if a user exists with his email
   * @param {string} email - User email
   * @returns {Promise<boolean>}
   */
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

  /**
   * Change user password
   * @param {number} id - User id
   * @param {{oldPassword: string, newPassword: string}} body - The payload
   * @returns {Promise<boolean>} - True if password has been changed
   */
  async changePassword(id, body) {
    try {
      const response = await this.api.put(`${id}/password`, body);
      if (response.status === 204) {
        return true;
      }

      return false;
    } catch (e) {
      throw e;
    }
  }
}
