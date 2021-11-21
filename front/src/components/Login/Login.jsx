import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { UserContext, MessageContext } from "../../contextes";
import useInput from "../../hooks/useInput";
import { AuthService } from "../../services";
import { Navigate } from "react-router-dom";

export default function Login() {
  const email = useInput("");
  const password = useInput("");
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { setMessage } = useContext(MessageContext);
  const authService = new AuthService();

  const handleSubmit = (event) => {
    event.preventDefault();

    setCurrentUser(authService.login(email.value, password.value));
    setMessage({
      type: "success",
      message: "Connexion réussie",
      time: 5000,
    });
  };

  return !currentUser ? (
    <>
      <Typography variant="h2" component="h1" sx={{ textAlign: "center" }}>
        Connexion
      </Typography>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
          "& .MuiButton-root": { m: 1, width: "56ch" },
        }}
        noValidate
        autoComplete="off"
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
      <Navigate to="/" replace={true} />
    </>
  );
}
