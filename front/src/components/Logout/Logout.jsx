import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contextes/user.context";
import { AuthService } from "../../services";
import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";

export default function Logout() {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const authService = new AuthService();

    setCurrentUser(null);
    authService.logout();
  }, [setCurrentUser]);

  return (
    <>
      <PageTitleHelper title="Déconnexion" />
      <Typography variant="body">Déconnexion réussie</Typography>
    </>
  );
}
