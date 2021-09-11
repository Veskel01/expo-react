import React from "react";

// mui
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// Components
import TodoList from "./TodoList";
import RefreshButton from "Components/Little-Components/RefreshButton";

// utils
import useBreakpoints from "Hooks/useBreakpoints.hook";
import TodoForm from "Components/Medium-Components/TodoForm";
import { useTodoProvider } from "Components/MainProvider/TodoProvider";

const MainView = () => {
  const { isXs } = useBreakpoints();

  const { todos } = useTodoProvider();

  return (
    <Paper
      component={Box}
      width={isXs ? "100%" : 550}
      height={isXs ? "100%" : 650}
      variant="elevation"
      elevation={16}
      sx={{ borderRadius: "0.5rem" }}
    >
      <AppBar
        position="static"
        color="primary"
        sx={{ top: 0, borderRadius: "0.5rem 0.5rem 0rem 0rem" }}
      >
        <Toolbar variant="dense">
          <Typography variant="h6">Todo List</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <RefreshButton />
        </Toolbar>
      </AppBar>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: "100%", padding: "1rem" }}
      >
        <Grid item xs={10}>
          <TodoForm />
        </Grid>
        <Grid container item xs={12} sx={{ mt: "1rem" }} justifyContent="center">
          <Grid item xs={12}>
            <TodoList todos={todos} />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainView;
