import { Button, Grid, TextField } from "@mui/material";
import React, { useContext } from "react";
import { UserContext, MessageContext } from "../../contextes";
import useInput from "../../hooks/useInput";
import { AuthService } from "../../services";
import { Navigate } from "react-router-dom";
import { PageTitle } from "../PageTitle/PageTitle";

export default function Login(props) {
  const email = useInput("");
  const password = useInput("");
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { setMessage } = useContext(MessageContext);
  const authService = new AuthService();

  const handleSubmit = (event) => {
    event.preventDefault();

    (async function login() {
      try {
        const user = await authService.login(email.value, password.value);
        setCurrentUser(user);

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
              time: 5000,
            });
            break;
        }
      }
    })();
  };

  return !currentUser ? (
    <>
      <PageTitle title="Connexion" />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "20em" },
          "& .MuiButton-root": { m: 1, width: "23em" },
        }}
        noValidate
      >
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          {...email}
          required
        />
        <TextField
          id="password"
          label="Mot de passe"
          variant="outlined"
          type="password"
          {...password}
          required
        />
        <Button variant="contained" type="submit">
          Connexion
        </Button>
      </Grid>
    </>
  ) : (
    <>
      <Navigate to={props.from ?? "/"} replace={true} />
    </>
  );
}
