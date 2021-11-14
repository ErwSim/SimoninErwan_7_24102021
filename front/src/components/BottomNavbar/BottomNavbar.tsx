import { Person, PersonAdd } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export function BottomNavbar() {
  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const smBp = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      {smBp ? (
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
            ></BottomNavigationAction>
            <BottomNavigationAction
              label="Connexion"
              icon={<Person />}
              value="/login"
              component={Link}
              to="/login"
            ></BottomNavigationAction>
          </BottomNavigation>
        </Paper>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}
