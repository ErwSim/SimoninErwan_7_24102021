import { useEffect, useState } from "react";
import { PostService } from "../../services";
import UserContextHelper from "../helper-components/UserContextHelper/UserContextHelper";
import Post from "./Post";

export default function Messages(props) {
  const { post, category } = props;
  const postService = new PostService();
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async () => {
      await fetchPosts();
    })();
  }, [post]);

  const fetchPosts = async () => {
    const posts = await postService.getOneByIdWithUsers(post.id);

    setPosts(
      posts.messages.map((post) => {
        post.createdAt = new Date(post.createdAt).toLocaleString("fr-FR");
        post.avatarName =
          post.User.lastname.charAt(0).toUpperCase() +
          post.User.firstname.charAt(0).toUpperCase();
        return post;
      })
    );
    return posts;
  };
  return (
    <UserContextHelper>
      {posts
        ? posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              category={category}
              reload={fetchPosts}
            />
          ))
        : ""}
    </UserContextHelper>
  );
}
