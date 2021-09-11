import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { Theme } from "@mui/material/styles";

interface IProps {
  isOpen: boolean;
}

const AppBackdrop = ({ isOpen }: IProps) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme: Theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default AppBackdrop;
