import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getRoutes } from "./routes";
import { Navbar } from "./components/Navbar/Navbar";
import { NotFound } from "./components/NotFound/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {getRoutes().map((route, index) => {
            return <Route {...route} key={index}></Route>;
          })}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
