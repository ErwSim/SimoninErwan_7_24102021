import { Button, Grid, TextField } from "@mui/material";
import React, { useContext } from "react";
import { UserContext, MessageContext } from "../../contextes";
import { useForm } from "react-hook-form";
import { AuthService } from "../../services";
import { Navigate } from "react-router-dom";
import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";

export default function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { setMessage } = useContext(MessageContext);
  const authService = new AuthService();

  const onSubmit = (data) => {
    (async function login() {
      try {
        const user = await authService.login(data.email, data.password);
        setCurrentUser(user.data);

        if (user) {
          setMessage({
            type: "success",
            message: "Connexion réussie",
            time: 5000,
          });
        }
      } catch (e) {
        switch (e.response.status) {
          case 404:
            setMessage({
              type: "error",
              message: "Connexion échouée : Nom d'utilisateur incorrect",
              time: 10000,
            });
            break;
          case 401:
            setMessage({
              type: "error",
              message: "Connexion échouée : Mot de passe incorrect",
              time: 10000,
            });
            break;
          default:
            setMessage({
              type: "error",
              message: "Connexion échouée : Erreur inconnue",
              time: 10000,
            });
            break;
        }
      }
    })();
  };

  return !currentUser ? (
    <>
      <PageTitleHelper title="Connexion" />
      <Grid
        container
        alignItems="center"
        component="form"
        spacing={2}
        columns={12}
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          padding: 2,
          "& .MuiFormControl-root": { width: "100%" },
        }}
        noValidate
      >
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            error={errors.email}
            {...register("email", { required: true })}
            required
          />
        </Grid>

        <Grid item xs={12}>
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

        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Se connecter
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
