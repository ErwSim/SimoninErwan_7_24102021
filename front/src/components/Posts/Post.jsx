import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useContext, useState } from "react";
import UserContextHelper from "../helper-components/UserContextHelper/UserContextHelper";
import "./Post.scss";
import Vote from "./Vote";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PostService } from "../../services";
import { MessageContext } from "../../contextes";
import Messages from "./Messages";
import NewPost from "./NewPost";
import ReactMarkdown from "react-markdown";

const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Post(props) {
  const { currentUser, post, reload, category } = props;
  const [hidden, setHidden] = useState(post.spoiler);
  const [expanded, setExpanded] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const postService = new PostService();
  const { setMessage } = useContext(MessageContext);

  const onClickDelete = () => {
    (async () => {
      try {
        await postService.delete(post.id);
        reload();
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCreateClose = () => {
    reload();
    setCreateOpen(false);
  };

  const handleCreateClick = () => {
    setCreateOpen(true);
  };

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        action={
          <>
            <Button onClick={handleCreateClick}>Répondre</Button>
            <UserContextHelper>
              <NewPost
                open={createOpen}
                onClose={handleCreateClose}
                post={post}
                category={category}
                currentUser={currentUser}
                newPost
              />
              <Vote post={post} />
            </UserContextHelper>
          </>
        }
        avatar={<Avatar sx={{ bgcolor: red[500] }}>{post.avatarName}</Avatar>}
        title={post.title}
        subheader={`Créé le ${post.createdAt} par ${post.User.lastname} ${post.User.firstname}`}
      ></CardHeader>
      <CardContent>
        <ReactMarkdown className={hidden && post.spoiler ? "spoiler" : ""}>
          {post.content}
        </ReactMarkdown>
        <Typography variant="body2" color="text.secondary">
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
      <CardActions disableSpacing>
        {currentUser.admin ? (
          <IconButton aria-label="delete" onClick={onClickDelete}>
            <DeleteIcon />
          </IconButton>
        ) : (
          ""
        )}

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show-more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        sx={{ paddingLeft: 2 }}
      >
        <UserContextHelper>
          <Messages post={post} category={category}></Messages>
        </UserContextHelper>
      </Collapse>
    </Card>
  );
}
