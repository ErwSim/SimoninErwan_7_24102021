import {
  Container,
  Paper,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRoutes } from "react-router-dom";
import React, { useMemo, useState } from "react";
import { lightTheme } from "../../Theme";
import Navbar from "../Navbar/Navbar";
import BottomNavbar from "../BottomNavbar/BottomNavbar";
import { routes } from "../../routes";
import { UserContext } from "../../contextes/user.context";
import { AuthService } from "../../services";
import Message from "../Message/Message";
import { MessageContext } from "../../contextes";

export default function App() {
  const muiTheme = useTheme();
  const smBp = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const authService = new AuthService();

  const [currentUser, setCurrentUser] = useState(authService.getStoredUser());
  const userContextValue = useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser]
  );
  const isAuthenticated = currentUser !== null;
  const elements = useRoutes(
    routes({ isAuthenticated, isAdmin: currentUser?.admin })
  );

  const [message, setMessage] = useState(false);
  const messageContextValue = useMemo(
    () => ({ message, setMessage }),
    [message]
  );

  return (
    <MessageContext.Provider value={messageContextValue}>
      <UserContext.Provider value={userContextValue}>
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
      </UserContext.Provider>
      <MessageContext.Consumer>
        {(value) => (value.message ? <Message {...value.message} /> : "")}
      </MessageContext.Consumer>
    </MessageContext.Provider>
  );
}
