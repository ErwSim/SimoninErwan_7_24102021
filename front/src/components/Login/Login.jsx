import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import useInput from "../../hooks/useInput";

export default function Login() {
  const email = useInput("");
  const password = useInput("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email.value, password.value);
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}
