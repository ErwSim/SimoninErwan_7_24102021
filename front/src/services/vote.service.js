import { GlobalService } from ".";
// eslint-disable-next-line no-unused-vars
import { VOTE_DEFINITION } from "../definitions/vote.definition";

export class VoteService extends GlobalService {
  constructor() {
    super("votes/");
  }

  /**
   * Get all votes given to a post
   * @param {number} postId - The post we need to get votes
   * @returns {Promise<Array<object>>} - Votes occured on the searched post
   */
  async getVotePost(postId) {
    const response = await this.api.get(`${this.fullUrl}posts/${postId}`);
    return response.data;
  }

  /**
   * Add a vote to a post, associated to an user
   * @param {number} postId - The id of the post
   * @param {number} userId - The id of the user who vote
   * @param {VOTE_DEFINITION} type  - The type of the vote (either UPVOTE or DOWNVOTE)
   * @returns {Promise<void>}
   */
  async vote(postId, userId, type) {
    return await this.api.put(
      `${this.fullUrl}posts/${postId}/users/${userId}`,
      {
        type,
      }
    );
  }

  /**
   * Delete a vote from a post, associated to an user
   * @param {number} postId - The id of the post
   * @param {number} userId - The id of the user who vote
   * @returns {Promise<void>}
   */
  async removeVote(postId, userId) {
    return await this.api.delete(
      `${this.fullUrl}posts/${postId}/users/${userId}`
    );
  }
}
