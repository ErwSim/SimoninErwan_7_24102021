import { useTheme } from "@emotion/react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import { useContext, useState } from "react";
import { MessageContext, UserContext } from "../../contextes";
import { inputPropsHelper } from "../../helpers/input-props.helper";
import { AuthService, UserService } from "../../services";
import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";

export default function Profile(props) {
  const userService = new UserService();
  const authService = new AuthService();

  const { setMessage } = useContext(MessageContext);
  const { setCurrentUser } = useContext(UserContext);

  const theme = useTheme();
  const dialogFullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [passwordOpen, setPasswordOpen] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: Object.assign({}, inputPropsHelper()),
    password: Object.assign({}, inputPropsHelper()),
    confirmPassword: Object.assign({}, inputPropsHelper()),
  });

  const { currentUser } = props;
  const listW50 = {
    sx: { width: "50%" },
  };
  const handleClickOpenPassword = () => {
    setPasswordOpen(true);
  };

  const handleClickClosePassword = () => {
    setPasswordOpen(false);
  };

  const handleSubmitPassword = () => {
    if (passwordForm.password.value !== passwordForm.confirmPassword.value) {
      setPasswordForm((prev) => {
        const state = Object.assign({}, prev);
        state.password.error = true;
        state.password.helperText = "Les mots de passe ne correspondent pas";
        state.confirmPassword.error = true;
        return state;
      });
    } else {
      setPasswordForm((prev) => {
        const state = Object.assign({}, prev);
        state.password.error = null;
        state.password.helperText = null;
        state.confirmPassword.error = null;
        return state;
      });

      (async () => {
        try {
          await userService.changePassword(currentUser.id, {
            oldPassword: passwordForm.oldPassword.value,
            newPassword: passwordForm.password.value,
          });

          setMessage({
            type: "success",
            message: "Mot de passe modifié",
            time: 5000,
          });
          setPasswordOpen(false);
        } catch (e) {
          if (e.response.data.error === "userWrongPassword") {
            setMessage({
              type: "error",
              message: "Ancien mot de passe incorrect",
              time: 10000,
            });
          } else {
            setMessage({
              type: "error",
              message: "Erreur inconnue",
              time: 10000,
            });
          }
        }
      })();
    }
  };

  const handleClickDelete = () => {
    (async () => {
      try {
        await userService.delete(currentUser.id);
        setMessage({
          type: "success",
          message: "Suppression effectuée",
          time: 5000,
        });

        setCurrentUser(null);
        authService.logout();
      } catch (e) {
        console.error(e);
        setMessage({
          type: "error",
          message: "Une erreur est survenue",
          time: 10000,
        });
      }
    })();
  };

  return (
    <>
      <PageTitleHelper title="Profil" />
      <List aria-label="profile detail" sx={{ width: "100%" }}>
        <ListItem divider>
          <ListItemText primary="Prénom" inset {...listW50} />
          <ListItemText primary={currentUser.firstname} {...listW50} />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Nom" inset {...listW50} />
          <ListItemText primary={currentUser.lastname} {...listW50} />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Email" inset {...listW50} />
          <ListItemText primary={currentUser.email} {...listW50} />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Mot de passe" inset {...listW50} />
          <ListItemText {...listW50}>
            <Button variant="contained" onClick={handleClickOpenPassword}>
              Modifier
            </Button>
          </ListItemText>
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Supprimer le compte" inset {...listW50} />
          <ListItemText {...listW50}>
            <Button variant="contained" onClick={handleClickDelete}>
              Supprimer
            </Button>
          </ListItemText>
        </ListItem>
      </List>

      <Dialog
        fullScreen={dialogFullScreen}
        open={passwordOpen}
        onClose={handleClickClosePassword}
        aria-labelledby="change-password-dialog"
      >
        <DialogTitle id="change-password-dialog">
          Modifier le mot de passe
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Renseignez votre mot de passe actuel, suivi du nouveau deux fois
          </DialogContentText>

          <TextField
            autoFocus
            variant="outlined"
            id="oldPassword"
            label="Mot de passe actuel"
            type="password"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
            {...passwordForm.oldPassword}
            onChange={(e) =>
              setPasswordForm((prev) => {
                const state = Object.assign({}, prev);
                state.oldPassword.value = e.target.value;
                return state;
              })
            }
          />
          <TextField
            autoFocus
            variant="outlined"
            id="password"
            label="Mot de passe"
            type="password"
            fullWidth
            sx={{ mb: 2 }}
            {...passwordForm.password}
            onChange={(e) =>
              setPasswordForm((prev) => {
                const state = Object.assign({}, prev);
                state.password.value = e.target.value;
                return state;
              })
            }
          />
          <TextField
            autoFocus
            variant="outlined"
            id="confirmPassword"
            label="Confirmez"
            type="password"
            {...passwordForm.confirmPassword}
            onChange={(e) =>
              setPasswordForm((prev) => {
                const state = Object.assign({}, prev);
                state.confirmPassword.value = e.target.value;
                return state;
              })
            }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClosePassword}>Annuler</Button>
          <Button onClick={handleSubmitPassword}>Valider</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
