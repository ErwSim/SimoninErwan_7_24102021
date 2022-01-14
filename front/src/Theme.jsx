import { createTheme, responsiveFontSizes } from "@mui/material";
import { pink, purple, red } from "@mui/material/colors";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: red[300],
      main: red[700],
      dark: red[900],
      contrastText: "#fff",
    },
    secondary: {
      light: purple["A100"],
      main: purple["A200"],
      dark: purple["A700"],
      contrastText: "#000",
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: pink[400],
      main: pink[600],
      dark: pink[800],
      contrastText: "#fff",
    },
    secondary: {
      light: purple["A100"],
      main: purple["A200"],
      dark: purple["A700"],
      contrastText: "#000",
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export { lightTheme, darkTheme };
