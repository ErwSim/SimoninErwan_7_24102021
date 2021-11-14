import { Person, PersonAdd } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Box,
  Link as MuiLink,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo-white.svg";
import "./Navbar.scss";

export function Navbar() {
  const theme = useTheme();
  const smBp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MuiLink component={Link} to="/" sx={{ flexGrow: 1 }}>
            <Logo width="200"></Logo>
          </MuiLink>

          {smBp ? (
            <React.Fragment>
              <Typography
                variant="body1"
                component="div"
                color="inherit"
                sx={{
                  "& a": {
                    m: 2,
                    color: "primary.contrastText",
                    textDecoration: "none",
                    fontWeight: 800,
                  },
                }}
              >
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive ? "active" : "notActive"
                  }
                >
                  <PersonAdd /> Inscription
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "notActive"
                  }
                >
                  <Person /> Connexion
                </NavLink>
              </Typography>
            </React.Fragment>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
