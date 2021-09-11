import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const useBreakpoints = () => {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isBetweenXsAndSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));

  return {
    isXs,
    isBetweenXsAndSm,
  };
};

export default useBreakpoints;
