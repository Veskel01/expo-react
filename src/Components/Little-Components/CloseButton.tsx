import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
  closeFn: () => void;
}

const CloseButton = ({ closeFn }: IProps) => {
  return (
    <IconButton onClick={closeFn} size="small">
      <CloseIcon />
    </IconButton>
  );
};

export default CloseButton;
