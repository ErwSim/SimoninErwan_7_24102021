import { GlobalService } from ".";

export class AuthService extends GlobalService {
  constructor() {
    super("auth/");
  }

  async login(email, password) {
    const response = await this.api.post(this.fullUrl + "signin", {
      email,
      password,
    });
    this.storeUser(response.data);
    this.currentUser = response.data;

    return response;
  }

  async signup(firstname, lastname, email, password) {
    const response = await this.api.post(this.fullUrl + "signup", {
      firstname,
      lastname,
      email,
      password,
    });
    this.storeUser(response.data);
    this.currentUser = response.data;

    return response;
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
