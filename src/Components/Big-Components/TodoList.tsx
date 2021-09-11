import React from "react";

// mui
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// utils
import { ITodo } from "Types/Todo.type";

// components
import ListItem from "Components/Medium-Components/ListItem";

interface IProps {
  todos: ITodo[];
}

type SortType = "Finished" | "Not Finished";

const TodoList = ({ todos }: IProps) => {
  const [actualSortType, setActualSort] = React.useState<SortType>("Not Finished");

  const handleSortChange = (e: SelectChangeEvent) => {
    setActualSort(e.target.value as SortType);
  };

  function sortTodos() {
    const copied = [...todos];

    const sortedTodos = copied.sort((a, b) =>
      a.is_completed === b.is_completed ? 0 : a.is_completed ? 1 : -1
    );

    if (copied.every((item) => !item.is_completed)) {
      return copied;
    }

    if (actualSortType === "Finished") {
      return sortedTodos.reverse();
    }

    return sortedTodos;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <FormControl fullWidth>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={actualSortType}
          onChange={handleSortChange}
          label="Sort By"
          onClick={() => {
            sortTodos();
          }}
          disabled={todos.length === 0}
        >
          {["Finished", "Not Finished"].map((value, index) => (
            <MenuItem key={index} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <List>
        {sortTodos().map(({ ...props }, index) => (
          <ListItem {...props} key={index} />
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
