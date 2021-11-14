import { createTheme, responsiveFontSizes } from "@mui/material";

let lightTheme = createTheme({
  palette: {
    primary: {
      light: "#fd5733",
      main: "#fd2d01",
      dark: "#b11f00",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffdfdf",
      main: "#ffd7d7",
      dark: "#b29696",
      contrastText: "#000",
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export { lightTheme };
