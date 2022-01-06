import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryService } from "../../services";
import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";

export default function Posts() {
  const categoryService = new CategoryService();
  const [category, setCategory] = useState();
  const [posts, setPosts] = useState();
  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      const cat = await fetchCategory();
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
    })();
  }, []);

  const fetchCategory = async () => {
    const cat = await categoryService.getOneById(
      categoryId,
      "?filter[include][Posts][include][User]=true&filter[include][Posts][orderBy][createdAt]=desc"
    );
    return cat;
  };
  return (
    <>
      {category ? (
        <>
          <PageTitleHelper title={category.name} />
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
        </>
      ) : (
        ""
      )}
    </>
  );
}
