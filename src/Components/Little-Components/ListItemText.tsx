import MuiListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/system";

const ListItemText = styled(MuiListItemText, {
  shouldForwardProp: (prop) => prop !== "completed",
})<{ completed: boolean }>(({ theme, completed }) => ({
  color: theme.palette.grey[500],
  textDecoration: completed ? "line-through" : "none",
}));

export default ListItemText;
