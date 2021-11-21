import { Login, Logout, PersonAdd } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contextes";

export default function BottomNavbar() {
  const { pathname } = window.location;
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { currentUser } = useContext(UserContext);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      {!currentUser ? (
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Inscription"
            icon={<PersonAdd />}
            value="/signup"
            component={Link}
            to="/signup"
          />
          <BottomNavigationAction
            label="Connexion"
            icon={<Login />}
            value="/login"
            component={Link}
            to="/login"
          />
        </BottomNavigation>
      ) : (
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction
            label="Déconnexion"
            icon={<Logout />}
            value="/logout"
            component={Link}
            to="logout"
          />
        </BottomNavigation>
      )}
    </Paper>
  );
}
