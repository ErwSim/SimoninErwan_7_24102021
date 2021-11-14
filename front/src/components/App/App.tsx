import { Paper, ThemeProvider, useMediaQuery, useTheme } from "@mui/material";
import { lightTheme } from "../../Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getRoutes } from "../../routes";
import { Navbar } from "../Navbar/Navbar";
import { NotFound } from "../NotFound/NotFound";
import { BottomNavbar } from "../BottomNavbar/BottomNavbar";
import React from "react";

export function App() {
  const muiTheme = useTheme();
  const smBp = useMediaQuery(muiTheme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Navbar />
        {smBp ? (
          <React.Fragment>
            <Routes>
              {getRoutes().map((route, index) => {
                return <Route {...route} key={index}></Route>;
              })}
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <BottomNavbar></BottomNavbar>
          </React.Fragment>
        ) : (
          <Paper elevation={3} sx={{ m: 5 }}>
            <Routes>
              {getRoutes().map((route, index) => {
                return <Route {...route} key={index}></Route>;
              })}
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Paper>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}
