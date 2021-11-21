import axios from "axios";

export class GlobalService {
  api;
  url;

  constructor(url) {
    this.url = url;
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}${url}`,
    });
    this.authInterceptor();
  }

  authInterceptor() {
    this.api.interceptors.request.use((config) => {
      const token = JSON.parse(localStorage.getItem("user"))?.token;

      if (token) {
        config.headers.Authorization = `Bear ${token}`;
      }
      return config;
    });
  }
}
