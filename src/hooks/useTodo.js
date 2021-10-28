import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { TodoContext } from "../context/todoContext";

export const useTodo = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const { openModal, saveTodoInModal, closeModal } = useContext(ModalContext);

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
    saveTodoInModal(todoSelected);
    openModal();
  };

  const updateTodo = (e, id, newTodo) => {
    e.preventDefault();

    if (newTodo.todo === "") return alert("add todo");

    const newListTodos = todos.map((todo) => {
      if (todo.id === id) {
        console.log(todo);
        return { ...todo, todo: newTodo.todo, category: newTodo.category };
      }
      return todo;
    });

    setTodos(newListTodos);
    closeModal();
  };

  return { deleteTodo, toggleTodo, editTodo, updateTodo };
};
