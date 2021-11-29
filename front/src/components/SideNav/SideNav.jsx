import { ArrowBack } from "@mui/icons-material";
import { Button, Divider, Drawer, IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contextes/user.context";
import Categories from "../Categories/Categories";

export default function SideNav(props) {
  const { currentUser } = useContext(UserContext);
  const isAdmin = currentUser?.admin;

  return (
    <Drawer
      anchor={props.sideAnchor}
      open={props.opened}
      onClose={() => props.onClose(false)}
    >
      <IconButton onClick={() => props.onClose(false)}>
        <ArrowBack />
      </IconButton>
      <Divider sx={{ mt: 2, mb: 2 }} />
      <Categories />
      {isAdmin ? (
        <>
          <Divider sx={{ mt: 2, mb: 2 }} />
          <Button
            component={Link}
            to="/manage-categories"
            onClick={() => props.onClose(false)}
          >
            Gérer les catégories
          </Button>
        </>
      ) : (
        ""
      )}
    </Drawer>
  );
}
