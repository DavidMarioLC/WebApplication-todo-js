import { useState, createContext } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [todoSelect, setTodoSelect] = useState({});

  const openModal = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
    setTodoSelect({});
  };

  const saveTodoInModal = (todo) => {
    setTodoSelect(todo);
  };

  const onChangeTodo = (e) => {
    setTodoSelect({
      ...todoSelect,
      todo: e.target.value,
    });
  };

  const onChangeCategory = (e) => {
    setTodoSelect({
      ...todoSelect,
      category: e.target.value,
    });
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
        saveTodoInModal,
        todoSelect,
        onChangeTodo,
        onChangeCategory,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
