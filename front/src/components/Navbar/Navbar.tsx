import { Person, PersonAdd } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Box,
  Link as MuiLink,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo-white.svg";

export function Navbar() {
  const theme = useTheme();
  const smBp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Logo width="200"></Logo>
          </Box>

          {smBp ? (
            <React.Fragment>
              <MuiLink
                component={Link}
                to="/signup"
                underline="none"
                color="inherit"
                sx={{ mr: 3 }}
              >
                <PersonAdd /> Inscription
              </MuiLink>
              <MuiLink
                component={Link}
                to="/login"
                underline="none"
                color="inherit"
              >
                <Person /> Connexion
              </MuiLink>
            </React.Fragment>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
