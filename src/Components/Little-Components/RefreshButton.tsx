import IconButton from "@mui/material/IconButton";
import { useTodoProvider } from "Components/MainProvider/TodoProvider";
import RefreshIcon from "@mui/icons-material/Refresh";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const RefreshButton = () => {
  const { refetch } = useTodoProvider();

  return (
    <Tooltip title="Odświeź" arrow TransitionComponent={Zoom}>
      <IconButton
        onClick={() => {
          refetch();
        }}
        color="inherit"
      >
        <RefreshIcon />
      </IconButton>
    </Tooltip>
  );
};

export default RefreshButton;
