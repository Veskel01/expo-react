import React from "react";

// mui
import MuiListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

// icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// components
import ListItemText from "Components/Little-Components/ListItemText";
import { useMutation } from "@apollo/client";
import DELETE_TODO from "GraphQL/Mutations/DeleteTodo.mutation";
import { useTodoProvider } from "Components/MainProvider/TodoProvider";
import EditTodoDialog from "Components/Big-Components/EditTodo";
import COMPLETE_TODO from "GraphQL/Mutations/CompleteTodo.mutation";

interface IProps {
  content: string;
  is_completed: boolean;
  id: number;
}

const ListItem = ({ content, is_completed, id }: IProps) => {
  const { removeTodo } = useTodoProvider();

  const [editTodoOpen, setEditTodoOpen] = React.useState<boolean>(false);

  const { todos } = useTodoProvider();

  function consoleAllTodos() {
    console.log(todos.filter((todo) => todo.is_completed));
  }

  function handleEditTodoOpen() {
    setEditTodoOpen(true);
  }

  function handleEditTodoClose() {
    setEditTodoOpen(false);
  }

  const [deleteTodo] = useMutation(DELETE_TODO);

  const [completeTodo] = useMutation(COMPLETE_TODO);

  function handleTodoRemove() {
    deleteTodo({
      variables: {
        id,
      },
    });
    removeTodo(id);
  }

  function handleTodoComplete() {
    completeTodo({
      variables: {
        id,
      },
    }).then(() => {
      consoleAllTodos();
    });
  }

  return (
    <>
      <MuiListItem
        secondaryAction={
          <>
            <IconButton size="small" color="info" onClick={handleEditTodoOpen}>
              <EditIcon />
            </IconButton>
            <IconButton color="error" onClick={handleTodoRemove} size="small">
              <DeleteIcon />
            </IconButton>
          </>
        }
        disablePadding
        divider
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            disableRipple
            color="success"
            checked={is_completed}
            onClick={handleTodoComplete}
          />
        </ListItemIcon>
        <ListItemText completed={is_completed}>{content}</ListItemText>
      </MuiListItem>
      <EditTodoDialog open={editTodoOpen} onClose={handleEditTodoClose} todoID={id} />
    </>
  );
};

export default ListItem;
