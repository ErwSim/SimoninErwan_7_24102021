import { Button, Grid, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import { MessageContext, UserContext } from "../../contextes";
import { useForm } from "react-hook-form";
import { AuthService, UserService } from "../../services";
import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";

export default function Signup(props) {
  const { register, handleSubmit } = useForm();

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { setMessage } = useContext(MessageContext);
  const [customErrors, setCustomErrors] = useState({
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const authService = new AuthService();
  const userService = new UserService();

  const checkExistence = async (event) => {
    event.persist();

    try {
      await userService.checkUserExists(event.target.value);

      setCustomErrors({
        email: {
          color: "error",
          helperText: "Adresse e-mail déjà utilisée",
          error: true,
        },
      });
    } catch (e) {
      setCustomErrors({
        email: {
          color: "success",
          helperText: "Adresse e-mail disponible",
        },
      });
    }
  };

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
            {...register("firstname", { required: true })}
            required
            {...customErrors.firstname}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="lastname"
            label="Nom"
            variant="outlined"
            {...register("lastname", { required: true })}
            required
            {...customErrors.lastname}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Adresse e-mail invalide",
              },
            })}
            onBlur={checkExistence}
            required
            {...customErrors.email}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="password"
            label="Mot de passe"
            variant="outlined"
            type="password"
            {...register("password", { required: true })}
            required
            {...customErrors.password}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="confirmPassword"
            label="Confirmation"
            variant="outlined"
            type="password"
            {...register("confirmPassword", { required: true })}
            required
            {...customErrors.confirmPassword}
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
