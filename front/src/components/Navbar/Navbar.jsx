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
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../contextes/user.context";
import { ReactComponent as Logo } from "../../images/logo-white.svg";
import "./Navbar.scss";

export default function Navbar() {
  const theme = useTheme();
  const smBp = useMediaQuery(theme.breakpoints.up("sm"));
  const { currentUser } = useContext(UserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MuiLink component={Link} to="/" sx={{ flexGrow: 1 }}>
            <Logo width={200} />
          </MuiLink>

          {smBp ? (
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
              {currentUser ? (
                <>
                  <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                      isActive ? "active" : "notActive"
                    }
                  >
                    Déconnexion
                  </NavLink>
                </>
              ) : (
                <>
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
                </>
              )}
            </Typography>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
