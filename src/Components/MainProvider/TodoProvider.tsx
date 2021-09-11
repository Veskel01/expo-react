import React from "react";

import { useQuery } from "@apollo/client";

import GET_ALL_TODOS from "GraphQL/Queries/GetAllTodos.query";
import { ITodo } from "Types/Todo.type";
import AppBackdrop from "Components/Little-Components/AppBackdrop";

const TodoContext = React.createContext<{
  todos: ITodo[];
  addNewTodo: (item: ITodo) => void;
  removeTodo: (id: number) => void;
  refetch: () => void;
}>({
  todos: [],
  addNewTodo: () => {},
  refetch: () => {},
  removeTodo: () => {},
});

const TodoProvider: React.FC = ({ children }) => {
  const { data, loading, refetch } = useQuery<{ getAllTodos: ITodo[] }>(GET_ALL_TODOS, {
    pollInterval: 6000,
  });

  const [allTodos, setAllTodos] = React.useState<ITodo[]>([]);

  const addNewTodo = React.useCallback((newTodo: ITodo) => {
    setAllTodos((prevState) => [...prevState, newTodo]);
  }, []);

  const removeTodo = React.useCallback((id: number) => {
    setAllTodos((prevState) => [...prevState.filter(({ id: valueId }) => valueId !== id)]);
  }, []);

  React.useEffect(() => {
    if (!loading && data) {
      setAllTodos(data.getAllTodos);
    }
  }, [data, loading]);

  if (loading && !data) {
    return <AppBackdrop isOpen={loading} />;
  }

  return (
    <TodoContext.Provider
      value={{
        todos: allTodos,
        addNewTodo,
        refetch,
        removeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

function useTodoProvider() {
  const { todos, addNewTodo, refetch, removeTodo } = React.useContext(TodoContext);

  return {
    todos,
    refetch,
    addNewTodo,
    removeTodo,
  };
}

export { useTodoProvider };

export default TodoProvider;
