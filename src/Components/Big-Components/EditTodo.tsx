import React from "react";

// mui
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";

// components
import CloseButton from "Components/Little-Components/CloseButton";
import Input from "Components/Little-Components/Input";
import LoadingButton from "@mui/lab/LoadingButton";

// icons
import SaveIcon from "@mui/icons-material/Save";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import UPDATE_TODO from "GraphQL/Mutations/UpdateTodo.mutation";
import { ITodo } from "Types/Todo.type";

interface IProps {
  open: boolean;
  onClose: () => void;
  todoID: number;
}

const EditTodoDialog = ({ onClose, todoID, ...props }: IProps) => {
  const {
    register,
    handleSubmit: useFormSubmit,
    formState: { errors },
  } = useForm<{ newContent: string }>({
    defaultValues: {
      newContent: "",
    },
  });

  const [updateTodo, { loading }] = useMutation<{ updateTodo: ITodo }>(UPDATE_TODO, {
    onCompleted: (data) => {
      if (data.updateTodo) {
        onClose();
      }
    },
  });

  const handleSubmit = useFormSubmit(({ newContent }) => {
    updateTodo({
      variables: {
        id: todoID,
        content: newContent,
      },
    });
  });

  return (
    <Dialog
      onClose={onClose}
      {...props}
      fullWidth
      transitionDuration={{
        enter: 450,
        exit: 300,
      }}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          Todo Edit
          <Box sx={{ flexGrow: 1 }} />
          <CloseButton closeFn={onClose} />
        </DialogTitle>
        <DialogContent dividers>
          <Input
            margin="dense"
            fullWidth
            maxLength={40}
            label="Enter new content"
            {...register("newContent", {
              required: "Field is required",
            })}
            error={Boolean(errors.newContent)}
            helperText={errors.newContent?.message}
          />
        </DialogContent>
        <DialogActions>
          <LoadingButton
            loading={loading}
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SaveIcon />}
          >
            Save
          </LoadingButton>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default React.memo(EditTodoDialog);
