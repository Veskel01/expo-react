import React from "react";

// mui
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material";

// utils
import MainMuiTheme from "Mui/Theme";

// components
import MainView from "Components/Big-Components/MainView";
import TodoProvider from "Components/MainProvider/TodoProvider";

const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const AppCore = () => {
  const classes = useStyles();
  return (
    <TodoProvider>
      <ThemeProvider theme={MainMuiTheme}>
        <Box className={classes.root}>
          <MainView />
        </Box>
      </ThemeProvider>
    </TodoProvider>
  );
};

export default AppCore;
