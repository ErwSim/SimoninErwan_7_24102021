import {
  AccountCircle,
  Login,
  Logout,
  Menu,
  PersonAdd,
} from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  Box,
  Link as MuiLink,
  useMediaQuery,
  useTheme,
  Typography,
  IconButton,
} from "@mui/material";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../contextes/user.context";
import { ReactComponent as Logo } from "../../images/logo-white.svg";
import { ThemeSwitchHelper } from "../helper-components/ThemeSwitchHelper/ThemeSwitchHelper";
import SideNav from "../SideNav/SideNav";
import "./Navbar.scss";

export default function Navbar(props) {
  const { setTheme } = props;

  const theme = useTheme();
  const smBp = useMediaQuery(theme.breakpoints.up("sm"));

  const { currentUser } = useContext(UserContext);

  const [sideOpened, setSideOpened] = useState(false);

  return (
    <>
      {currentUser ? (
        <SideNav
          opened={sideOpened}
          onClose={(e) => setSideOpened(e)}
          sideAnchor="left"
        />
      ) : (
        ""
      )}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {currentUser ? (
              <IconButton
                aria-label="opened categories"
                color="inherit"
                onClick={() => setSideOpened(!sideOpened)}
              >
                <Menu />
              </IconButton>
            ) : (
              ""
            )}
            <MuiLink component={Link} to="/" sx={{ flexGrow: 1 }}>
              <Logo width={200} />
            </MuiLink>

            <ThemeSwitchHelper setTheme={setTheme} />
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
                      to="/profile"
                      className={({ isActive }) =>
                        isActive ? "active" : "notActive"
                      }
                    >
                      <AccountCircle />
                      {currentUser.firstname}
                    </NavLink>
                    <NavLink
                      to="/logout"
                      className={({ isActive }) =>
                        isActive ? "active" : "notActive"
                      }
                    >
                      <Logout /> Déconnexion
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
                      <Login /> Connexion
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
    </>
  );
}
