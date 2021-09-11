import React from "react";

// icons
import AddIcon from "@mui/icons-material/Add";

//components
import Input from "Components/Little-Components/Input";

//mui
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useTodoProvider } from "Components/MainProvider/TodoProvider";

/// utils
import { useMutation } from "@apollo/client";
import ADD_NEW_TODO from "GraphQL/Mutations/NewTodo.mutation";
import { ITodo } from "Types/Todo.type";
import { useForm } from "react-hook-form";

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      todo: "",
    },
    mode: "onBlur",
  });

  const { addNewTodo } = useTodoProvider();

  const [addTodo, { data, loading }] = useMutation<{ createNewTodo: ITodo }, { content: string }>(
    ADD_NEW_TODO
  );

  const handleFormSubmit = handleSubmit(({ todo }) => {
    addTodo({
      variables: {
        content: todo,
      },
    });
    reset();
  });

  React.useEffect(() => {
    if (data) {
      addNewTodo(data.createNewTodo);
    }
  }, [data, addNewTodo]);

  return (
    <form style={{ width: "100%" }} onSubmit={handleFormSubmit} autoComplete="off">
      <Stack alignItems="center" spacing={2} divider={<Divider flexItem />}>
        <Input
          fullWidth
          label="Todo"
          maxLength={40}
          placeholder="Enter your today's todo"
          {...register("todo", {
            required: "Field is required",
          })}
          error={Boolean(errors.todo)}
          helperText={errors.todo?.message}
        />
        <LoadingButton
          sx={{ width: "80%" }}
          variant="contained"
          startIcon={<AddIcon />}
          size="small"
          type="submit"
          loading={loading}
        >
          Add Todo
        </LoadingButton>
      </Stack>
    </form>
  );
};

export default TodoForm;
