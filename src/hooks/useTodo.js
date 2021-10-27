import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

export const useTodo = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const deleteTodo = (id) => {
    const newListTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newListTodos);
  };

  const toggleTodo = (event, id) => {
    const newListTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: event.target.checked };
      }
      return todo;
    });
    setTodos(newListTodos);
  };

  const editTodo = (id) => {
    const todoSelected = todos.find((todo) => todo.id === id);
    console.log(todoSelected);
  };

  return [deleteTodo, toggleTodo, editTodo];
};
