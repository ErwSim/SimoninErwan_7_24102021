import { Button, Grid, TextField } from "@mui/material";
import React, { useContext } from "react";
import { Navigate } from "react-router";
import { MessageContext, UserContext } from "../../contextes";
import { useForm } from "react-hook-form";
import { AuthService } from "../../services";
import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";

export default function Signup(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { setMessage } = useContext(MessageContext);
  const authService = new AuthService();

  const onSubmit = (data) => {
    (async function signup() {
      const { firstname, lastname, email, password, confirmPassword } = data;

      try {
        if (password !== confirmPassword) {
          throw new Error("passwordsDoesNotMatch");
        }

        const user = await authService.signup(
          firstname,
          lastname,
          email,
          password
        );
        setCurrentUser(user.data);

        if (user) {
          setMessage({
            type: "success",
            message: "Inscription réussie",
            time: 5000,
          });
        }
      } catch (e) {
        if (e instanceof Error) {
          switch (e.message) {
            case "passwordsDoesNotMatch":
              setMessage({
                type: "error",
                message:
                  "Inscription échouée : Les mots de passe ne correspondent pas",
                time: 10000,
              });
              break;
            default:
              setMessage({
                type: "error",
                message: "Inscription échouée : Erreur inconnue",
                time: 10000,
              });
              break;
          }
        } else {
          switch (e.response.status) {
            case 422:
              setMessage({
                type: "error",
                message: "Inscription échouée : Le formulaire est incomplet",
                time: 10000,
              });
              break;
            default:
              setMessage({
                type: "error",
                message: "Inscription échouée : Erreur inconnue",
                time: 10000,
              });
              break;
          }
        }
      }
    })();
  };

  return !currentUser ? (
    <>
      <PageTitleHelper title="Inscription" />
      <Grid
        container
        alignItems="center"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
        columns={12}
        sx={{
          padding: 2,
          "& .MuiFormControl-root": { width: "100%" },
        }}
        noValidate
      >
        <Grid item xs={12} md={6}>
          <TextField
            id="firstname"
            label="Prénom"
            variant="outlined"
            error={errors.firstname}
            {...register("firstname", { required: true })}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="lastname"
            label="Nom"
            variant="outlined"
            error={errors.lastname}
            {...register("lastname", { required: true })}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            error={errors.email}
            {...register("email", { required: true })}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="password"
            label="Mot de passe"
            variant="outlined"
            type="password"
            error={errors.password}
            {...register("password", { required: true })}
            required
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="confirmPassword"
            label="Confirmation"
            variant="outlined"
            type="password"
            error={errors.password}
            {...register("confirmPassword", { required: true })}
            required
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            S'inscrire
          </Button>
        </Grid>
      </Grid>
    </>
  ) : (
    <>
      <Navigate to={props.from ?? "/"} replace={true} />
    </>
  );
}
