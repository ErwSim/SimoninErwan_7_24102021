import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useContext, useState } from "react";
import UserContextHelper from "../helper-components/UserContextHelper/UserContextHelper";
import "./Post.scss";
import Vote from "./Vote";
import DeleteIcon from "@mui/icons-material/Delete";
import { PostService } from "../../services";
import { MessageContext } from "../../contextes";

export default function Post(props) {
  const { currentUser, post, fetchCategory } = props;
  const [hidden, setHidden] = useState(post.spoiler);
  const postService = new PostService();
  const { setMessage } = useContext(MessageContext);

  const onClickDelete = () => {
    (async () => {
      try {
        await postService.delete(post.id);
        fetchCategory();
      } catch (e) {
        console.error(e);
        setMessage({
          type: "error",
          message: "Une erreur est survenue",
          time: 5000,
        });
      }
    })();
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        action={
          <UserContextHelper>
            <Vote post={post} />
          </UserContextHelper>
        }
        avatar={<Avatar sx={{ bgcolor: red[500] }}>{post.avatarName}</Avatar>}
        title={post.title}
        subheader={`Créé le ${post.createdAt} par ${post.User.lastname} ${post.User.firstname}`}
      ></CardHeader>
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          className={hidden && post.spoiler ? "spoiler" : ""}
        >
          {post.content}
          {post.spoiler ? (
            hidden ? (
              <>
                <br />
                <Button onClick={() => setHidden(false)}>Afficher</Button>
              </>
            ) : (
              <>
                <br />
                <Button onClick={() => setHidden(true)}>Masquer</Button>
              </>
            )
          ) : (
            ""
          )}
        </Typography>
      </CardContent>
      <CardActions>
        {currentUser.admin ? (
          <IconButton aria-label="delete" onClick={onClickDelete}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
}
