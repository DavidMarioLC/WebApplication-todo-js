import { useState, createContext } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const filterByCategory = (e) => {
    const ListTodos = todos.filter((todo) => todo.category === e.target.value);
    setTodos(ListTodos);
  };

  return (
    <TodoContext.Provider value={[todos, setTodos, filterByCategory]}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
