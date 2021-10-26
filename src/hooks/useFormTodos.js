import { useState, useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { nanoid } from "nanoid";

export const useFormTodos = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const [form, setForm] = useState({
    id: "",
    todo: "",
    category: "",
    done: false,
  });

  const onChangeTodo = (e) => {
    setForm({
      ...form,
      todo: e.target.value,
    });
  };

  const onChangeCategory = (e) => {
    setForm({
      ...form,
      category: e.target.value,
    });
  };

  const saveTodo = (e) => {
    e.preventDefault();

    const id = nanoid(10);

    setTodos([...todos, { ...form, id }]);

    setForm({
      id: "",
      todo: "",
      category: "",
      done: false,
    });
  };

  return [onChangeTodo, onChangeCategory, saveTodo];
};
