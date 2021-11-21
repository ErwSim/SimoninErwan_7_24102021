import { List, ListItem, ListItemText } from "@mui/material";
import PageTitleHelper from "../helper-components/PageTitleHelper/PageTitleHelper";

export default function Profile(props) {
  const { currentUser } = props;

  return (
    <>
      <PageTitleHelper title="Profil" />
      <List aria-label="profile detail">
        <ListItem>
          <ListItemText primary={currentUser.firstname} />
        </ListItem>
      </List>
    </>
  );
}
