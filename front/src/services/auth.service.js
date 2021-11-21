import { GlobalService } from ".";

export class AuthService extends GlobalService {
  currentUser;

  constructor() {
    super("auth/");
  }

  async login(email, password) {
    try {
      const response = await this.api.post("signin", { email, password });
      this.storeUser(response.data);
      this.currentUser = response.data;

      return response;
    } catch (e) {
      throw e;
    }
  }

  logout() {
    localStorage.removeItem("user");
  }

  storeUser(userData) {
    localStorage.setItem("user", JSON.stringify(userData));
  }

  getStoredUser() {
    this.currentUser =
      this.currentUser ?? JSON.parse(localStorage.getItem("user"));
    return this.currentUser;
  }

  getUserToken() {
    return this.getStoredUser.token;
  }
}
