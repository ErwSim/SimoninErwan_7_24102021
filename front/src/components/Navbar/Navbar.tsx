import { AppBar, Toolbar, Box } from "@mui/material";
import { ReactComponent as Logo } from "../../images/logo-white.svg";

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo width="200"></Logo>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
