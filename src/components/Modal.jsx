import styled from "styled-components";
import { Input, Select, Button } from "./common";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { useTodo } from "../hooks/useTodo";
const Modal = () => {
  const { closeModal, todoSelect, onChangeTodo, onChangeCategory } =
    useContext(ModalContext);

  const { updateTodo } = useTodo();
  return (
    <StyledModal>
      <StyledModalForm
        onSubmit={(e) => updateTodo(e, todoSelect.id, todoSelect)}
      >
        <Input value={todoSelect.todo} eventChange={onChangeTodo} />
        <Select
          size={1}
          value={todoSelect.category}
          eventOnChange={onChangeCategory}
          items={[
            { id: "1", value: "salud" },
            { id: "2", value: "house" },
            { id: "3", value: "work" },
          ]}
        />
        <Button>Update</Button>
        <ButtonClose onClick={closeModal}>go back</ButtonClose>
      </StyledModalForm>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: fixed;
  /* width: 100%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  inset: 0;
  background: hsla(206, 71%, 11%, 0.61);
`;

const StyledModalForm = styled.form`
  position: absolute;
  /* width: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const ButtonClose = styled.p`
  cursor: pointer;
  border: none;
  color: #fff;
  border-radius: 50%;
  background: none;
  text-decoration: underline;
  text-align: center;
  &:active {
    transform: scale(0.95);
  }
`;

export default Modal;
