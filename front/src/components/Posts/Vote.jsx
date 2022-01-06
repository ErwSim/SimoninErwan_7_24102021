import { ThumbDownOffAlt, ThumbUpOffAlt } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function Vote(props) {
  console.log(props);
  return (
    <>
      <IconButton>
        <ThumbUpOffAlt></ThumbUpOffAlt>
      </IconButton>
      <IconButton>
        <ThumbDownOffAlt></ThumbDownOffAlt>
      </IconButton>
    </>
  );
}
