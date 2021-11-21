import { Alert, Snackbar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MessageContext } from "../../contextes";

export default function Message(props) {
  const [open, setOpen] = useState(false);
  const { setMessage } = useContext(MessageContext);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setMessage(null);
    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={props.time} onClose={handleClose}>
      <Alert onClose={handleClose} severity={props.type} sc={{ width: "100%" }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}
