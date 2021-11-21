import {
  Container,
  Paper,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRoutes } from "react-router-dom";
import React from "react";
import { lightTheme } from "../../Theme";
import Navbar from "../Navbar/Navbar";
import BottomNavbar from "../BottomNavbar/BottomNavbar";
import { routes } from "../../routes";

export default function App() {
  const muiTheme = useTheme();
  const smBp = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const elements = useRoutes(routes);

  return (
    <ThemeProvider theme={lightTheme}>
      <Navbar />
      {smBp ? (
        <>
          {elements}
          <BottomNavbar />
        </>
      ) : (
        <Container sx={{ mt: 3 }}>
          <Paper elevation={3}>{elements}</Paper>
        </Container>
      )}
    </ThemeProvider>
  );
}
