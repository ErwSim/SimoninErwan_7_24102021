import AddIcon from "@mui/icons-material/Add";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Fab,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryService } from "../../services";
import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";
import NewPost from "./NewPost";

export default function Posts(props) {
  const { currentUser } = props;
  const categoryService = new CategoryService();
  const [category, setCategory] = useState();
  const [posts, setPosts] = useState();
  const [createOpen, setCreateOpen] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      await fetchCategory();
    })();
  }, []);

  const handleCreateClose = () => {
    fetchCategory();
    setCreateOpen(false);
  };

  const handleCreateClick = () => {
    setCreateOpen(true);
  };

  const fetchCategory = async () => {
    const cat = await categoryService.getOneById(
      categoryId,
      "?filter[include][Posts][include][User]=true&filter[include][Posts][orderBy][createdAt]=desc"
    );

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
            aria-label="add-category"
            onClick={handleCreateClick}
          >
            <AddIcon />
          </Fab>
          {posts
            ? posts.map((post) => (
                <Card key={post.id} sx={{ marginBottom: 2 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }}>
                        {post.avatarName}
                      </Avatar>
                    }
                    title={post.title}
                    subheader={`Créé le ${post.createdAt} par ${post.User.lastname} ${post.User.firstname}`}
                  ></CardHeader>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {post.content}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            : ""}
          <NewPost
            open={createOpen}
            onClose={handleCreateClose}
            category={category}
            currentUser={currentUser}
          />
        </>
      ) : (
        ""
      )}
    </>
  );
}
