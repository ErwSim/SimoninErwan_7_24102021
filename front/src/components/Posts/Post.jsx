import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import UserContextHelper from "../helper-components/UserContextHelper/UserContextHelper";
import "./Post.scss";
import Vote from "./Vote";

export default function Post(props) {
  const { post } = props;
  const [hidden, setHidden] = useState(post.spoiler);

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
    </Card>
  );
}
