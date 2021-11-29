import { ArrowBack } from "@mui/icons-material";
import { Divider, Drawer, IconButton } from "@mui/material";
import { Categories } from "../Categories/Categories";

export function SideNav(props) {
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
      <Divider sx={{ mt: 2, mb: 2 }} />
      Gérer
    </Drawer>
  );
}
