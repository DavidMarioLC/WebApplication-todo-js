import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme";
import TodoProvider from "./context/todoContext";
import ModalProvider from "./context/ModalContext";
import { ModalContext } from "./context/ModalContext";
import FormTodos from "./components/FormTodos";
import ListTodos from "./components/ListTodos";
import Container from "./components/Container";
import Modal from "./components/Modal";

const App = () => {
  const [todo, setTodos, modalRef] = useContext(ModalContext);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Container>
        <ModalProvider>
          <TodoProvider>
            <ListTodos />
            <FormTodos />
          </TodoProvider>
          <Modal ref={modalRef} />
        </ModalProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
