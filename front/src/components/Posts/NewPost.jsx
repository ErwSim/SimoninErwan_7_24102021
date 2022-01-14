import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { MessageContext } from "../../contextes";
import { PostService } from "../../services";

export default function NewPost(props) {
  const { onClose, open, category, post, currentUser, newPost } = props;
  const postService = new PostService();
  const { register, handleSubmit } = useForm({});
  const { setMessage } = useContext(MessageContext);

  // eslint-disable-next-line no-unused-vars
  const [customErrors, setCustomErrors] = useState({
    title: null,
    content: null,
    spoiler: null,
  });

  const onSubmit = (data) => {
    (async function submit() {
      const { title, content, spoiler } = data;

      try {
        const postData = !newPost
          ? await postService.update(post.id, {
              title,
              content,
              spoiler,
            })
          : await postService.create({
              title,
              content,
              spoiler,
              categoryId: category.id,
              userId: currentUser.id,
              postId: post?.id ?? undefined,
            });

        if (postData) {
          setMessage({
            type: "success",
            message: "Message envoyé",
            time: 5000,
          });
        }

        onClose(postData);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e);
          setMessage({
            type: "error",
            message: "Une erreur est survenue",
            time: 5000,
          });
        }
      }
    })();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <DialogTitle>Nouveau post</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            "*": { marginTop: 1 },
            "& .MuiFormControl-root": { width: "100%" },
          }}
        >
          {!post ? (
            <TextField
              id="title"
              label="Titre"
              variant="outlined"
              {...register("title", { required: post ? false : true })}
              required={post ? false : true}
              {...customErrors.title}
            />
          ) : (
            ""
          )}

          <TextField
            id="content"
            label="Contenu"
            variant="outlined"
            placeholder="Tapez votre message ici, le markdown est pris en charge"
            rows={10}
            {...register("content", { required: true })}
            multiline
            required
            {...customErrors.content}
          />

          <FormControlLabel
            id="spoiler"
            {...register("spoiler")}
            control={<Switch />}
            label="Spoiler"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button type="submit">Envoyer</Button>
      </DialogActions>
    </Dialog>
  );
}
