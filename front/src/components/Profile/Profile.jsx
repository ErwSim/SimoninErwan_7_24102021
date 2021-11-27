import { List, ListItem, ListItemText } from "@mui/material";
import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";

export default function Profile(props) {
  const { currentUser } = props;

  return (
    <>
      <PageTitleHelper title="Profil" />
      <List aria-label="profile detail" sx={{ width: "75%" }}>
        <ListItem divider>
          <ListItemText primary="Prénom" />
          <ListItemText primary={currentUser.firstname} />
        </ListItem>
        <ListItem divider>
          <ListItemText primary="Nom" />
          <ListItemText primary={currentUser.lastname} />
        </ListItem>
      </List>
    </>
  );
}
