import { Person, PersonAdd } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function BottomNavbar() {
  const { pathname } = window.location;
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
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
          icon={<Person />}
          value="/login"
          component={Link}
          to="/login"
        />
      </BottomNavigation>
    </Paper>
  );
}
