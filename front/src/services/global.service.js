import axios from "axios";

export class GlobalService {
  constructor(url) {
    this.url = url;
    // eslint-disable-next-line no-undef
    this.fullUrl = `${process.env.REACT_APP_API_URL}${url}`;
    this.api = axios.create({
      baseURL: this.fullUrl,
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
    const response = await this.api.get(this.fullUrl + id);
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

  /**
   * Update one element of a model
   * @param {number} id - The id to update
   * @param {T} payload - The required payload
   * @returns {Promise<T>} - The updated element
   */
  async update(id, payload) {
    return await this.api.patch(this.fullUrl + id, payload);
  }

  /**
   * Delete one element of a model
   * @param {number} id - The id to delete
   * @param {T} payload - The required payload
   * @returns {Promise<void>}
   */
  async delete(id, payload) {
    await this.api.delete(this.fullUrl + id, payload);
  }
}
