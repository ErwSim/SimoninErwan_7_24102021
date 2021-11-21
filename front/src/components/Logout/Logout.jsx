import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contextes/user.context";
import { AuthService } from "../../services";
import { PageTitle } from "../PageTitle/PageTitle";

export default function Logout() {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const authService = new AuthService();

    setCurrentUser(null);
    authService.logout();
  }, [setCurrentUser]);

  return (
    <>
      <PageTitle title="Déconnexion" />
      <Typography variant="body">Déconnexion réussie</Typography>
    </>
  );
}
