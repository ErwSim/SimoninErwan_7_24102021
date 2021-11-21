import axios from "axios";

export class AuthService {
  api = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}auth/`,
  });

  currentUser;

  async login(email, password) {
    const response = await this.api.post("signin", { email, password });
    this.storeUser(response.data);
    this.currentUser = response.data;

    return response.data;
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
