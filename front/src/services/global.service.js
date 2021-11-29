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

  /**
   * Add authorization token to identified users
   */
  authInterceptor() {
    this.api.interceptors.request.use((config) => {
      const token = JSON.parse(localStorage.getItem("user"))?.token;

      if (token) {
        config.headers.Authorization = `Bear ${token}`;
      }
      return config;
    });
  }

  /**
   * Get all elements of a model
   * @returns {Promise<T>[]}
   */
  async getAll() {
    try {
      return await this.api.get();
    } catch (e) {
      throw e;
    }
  }

  /**
   * Get one elemnt of a model by its id
   * @param {number} id - The searched id
   * @returns {Promise<T>}
   */
  async getOneById(id) {
    try {
      return await this.api.get(id);
    } catch (e) {
      throw e;
    }
  }

  /**
   * Create one element of a model
   * @param {T} payload - The required payload
   * @returns {Promise<T>} - The created element
   */
  async create(payload) {
    try {
      return await this.api.post(payload);
    } catch (e) {
      throw e;
    }
  }
}
