/* eslint-disable no-unused-vars */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CategoryService } from "../../services";

export default function EditCategory(props) {
  const { onClose, category, open } = props;
  const categoryService = new CategoryService();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: category?.name,
      description: category?.description,
      imageUri: category?.imageUri,
      backgroundFallback: category?.backgroundFallback,
    },
  });
  const [customErrors, setCustomErrors] = useState({
    name: null,
    description: null,
    imageUri: null,
    backgroundFallback: null,
  });

  const onSubmit = (data) => {
    (async function submit() {
      const { name, description, imageUri, backgroundFallback } = data;

      try {
        const categoryData = category
          ? await categoryService.update(category.id, {
              name,
              description,
              imageUri,
              backgroundFallback,
            })
          : await categoryService.create({
              name,
              description,
              imageUri,
              backgroundFallback,
            });

        onClose(categoryData);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e);
        }
      }
    })();
  };

  const handleClose = () => {
    onClose();
  };

  const handleDelete = () => {
    categoryService.delete(category.id);
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
      <DialogTitle>Edition d&apos;une catégorie</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            "*": { marginTop: 1 },
            "& .MuiFormControl-root": { width: "100%" },
          }}
        >
          <TextField
            id="name"
            label="Nom"
            variant="outlined"
            {...register("name", { required: true })}
            required
            {...customErrors.name}
          />
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            {...register("description", { required: true })}
            required
            {...customErrors.description}
          />

          <TextField
            id="backgroundFallback"
            label="Couleur de fond"
            type="color"
            variant="outlined"
            {...register("backgroundFallback", {
              required: true,
            })}
            required
            {...customErrors.backgroundFallback}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={handleDelete}>Supprimer</Button>
        <Button type="submit">Envoyer</Button>
      </DialogActions>
    </Dialog>
  );
}
