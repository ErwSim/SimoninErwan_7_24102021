import { Typography } from "@mui/material";

export function PageTitle(props) {
  return (
    <Typography variant="h2" component="h1" sx={{ textAlign: "center" }}>
      {props.title}
    </Typography>
  );
}
