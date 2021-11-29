import axios from "axios";

export class GlobalService {
  constructor(url) {
    this.url = url;
    this.api = axios.create({
      // eslint-disable-next-line no-undef
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
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  /**
   * Get all elements of a model
   * @returns {Promise<T>[]}
   */
  async getAll() {
    const response = await this.api.get();
    return response.data;
  }

  /**
   * Get one elemnt of a model by its id
   * @param {number} id - The searched id
   * @returns {Promise<T>}
   */
  async getOneById(id) {
    const response = await this.api.get(id);
    return response.data;
  }

  /**
   * Create one element of a model
   * @param {T} payload - The required payload
   * @returns {Promise<T>} - The created element
   */
  async create(payload) {
    return await this.api.post(payload);
  }
}
