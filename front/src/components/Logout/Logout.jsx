import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contextes/user.context";
import { AuthService } from "../../services";

export default function Logout() {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const authService = new AuthService();

    setCurrentUser(null);
    authService.logout();
  }, [setCurrentUser]);

  return (
    <>
      <Typography variant="h2" component="h1" sx={{ textAlign: "center" }}>
        Déconnexion
      </Typography>
      <Typography variant="body">Déconnexion réussie</Typography>
    </>
  );
}
