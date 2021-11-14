import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export function Login() {
  return (
    <React.Fragment>
      <Typography variant="h2" component="h1" sx={{ textAlign: "center" }}>
        Connexion
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="email" label="Email" variant="outlined" required />
        <TextField
          id="password"
          label="Mot de passe"
          variant="outlined"
          type="password"
          required
        />
      </Box>
    </React.Fragment>
  );
}
