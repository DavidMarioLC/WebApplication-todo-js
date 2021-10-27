import { useState, useRef, createContext } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [todo, setTodo] = useState({});
  const modalRef = useRef(null);

  return (
    <ModalContext.Provider value={[todo, setTodo, modalRef]}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
