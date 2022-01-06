import { GlobalService } from ".";
// eslint-disable-next-line no-unused-vars
import { VOTE_DEFINITION } from "../definitions/vote.definition";

export class PostService extends GlobalService {
  constructor() {
    super("posts/");
  }

  /**
   * Add a vote to a post, associated to an user
   * @param {number} postId - The id of the post
   * @param {number} userId - The id of the user who vote
   * @param {VOTE_DEFINITION} type  - The type of the vote (either UPVOTE or DOWNVOTE)
   * @returns {Promise<void>}
   */
  async vote(postId, userId, type) {
    return await this.api.put(`${this.fullUrl}/${postId}/users/${userId}`, {
      type,
    });
  }

  /**
   * Delete a vote from a post, associated to an user
   * @param {number} postId - The id of the post
   * @param {number} userId - The id of the user who vote
   * @returns {Promise<void>}
   */
  async removeVote(postId, userId) {
    return await this.api.delete(`${this.fullUrl}/${postId}/users/${userId}`);
  }
}
