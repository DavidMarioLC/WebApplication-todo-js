import styled from "styled-components";
import { useFormTodos } from "../hooks/useFormTodos";
import { Input, Select, Button } from "./common";

const FormTodos = () => {
  const [onChangeTodo, onChangeCategory, saveTodo, todo, category] =
    useFormTodos();

  return (
    <StyledForm onSubmit={saveTodo}>
      <Input value={todo} eventChange={onChangeTodo} />
      <Select
        size={1}
        value={category}
        eventOnChange={onChangeCategory}
        items={[
          { id: "1", value: "salud" },
          { id: "2", value: "house" },
          { id: "3", value: "work" },
        ]}
      />
      <Button>Save</Button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.darkBlue};
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default FormTodos;
