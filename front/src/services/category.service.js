import { GlobalService } from ".";

export class CategoryService extends GlobalService {
  constructor() {
    super("categories/");
  }

  /**
   * Get one elemnt of a model by its id
   * @param {number} id - The searched id
   * @returns {Promise<T>}
   */
  async getOneByIdWithUsers(id) {
    const response = await this.api.get(this.fullUrl + id + "/users");
    return response.data;
  }
}
