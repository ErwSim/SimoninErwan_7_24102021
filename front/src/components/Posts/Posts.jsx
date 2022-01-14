import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryService } from "../../services";
import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";
import UserContextHelper from "../helper-components/UserContextHelper/UserContextHelper";
import NewPost from "./NewPost";
import Post from "./Post";

export default function Posts() {
  const categoryService = new CategoryService();
  const [category, setCategory] = useState();
  const [posts, setPosts] = useState();
  const [createOpen, setCreateOpen] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      await fetchCategory();
    })();
  }, [categoryId]);

  const handleCreateClose = () => {
    fetchCategory();
    setCreateOpen(false);
  };

  const handleCreateClick = () => {
    setCreateOpen(true);
  };

  const fetchCategory = async () => {
    const cat = await categoryService.getOneByIdWithUsers(categoryId);

    setCategory(cat);
    setPosts(
      cat.Posts.filter((post) => post.postId === null).map((post) => {
        post.createdAt = new Date(post.createdAt).toLocaleString("fr-FR");
        post.avatarName =
          post.User.lastname.charAt(0).toUpperCase() +
          post.User.firstname.charAt(0).toUpperCase();
        return post;
      })
    );
    return cat;
  };
  return (
    <>
      {category ? (
        <>
          <PageTitleHelper title={category.name} />
          <Fab
            color="primary"
            aria-label="add-post"
            onClick={handleCreateClick}
          >
            <AddIcon />
          </Fab>
          <UserContextHelper>
            {posts
              ? posts.map((post) => (
                  <Post
                    key={post.id}
                    post={post}
                    category={category}
                    reload={fetchCategory}
                  />
                ))
              : ""}
            <NewPost
              open={createOpen}
              onClose={handleCreateClose}
              category={category}
              newPost
            />
          </UserContextHelper>
        </>
      ) : (
        ""
      )}
    </>
  );
}
