import { GlobalService } from ".";

export class PostService extends GlobalService {
  constructor() {
    super("posts/");
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
