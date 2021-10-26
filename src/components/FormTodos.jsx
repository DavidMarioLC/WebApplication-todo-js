import styled from "styled-components";
import { useFormTodos } from "../hooks/useFormTodos";

const FormTodos = () => {
  const [onChangeTodo, onChangeCategory, saveTodo] = useFormTodos();

  return (
    <StyledForm onSubmit={saveTodo}>
      <StyledInput
        onChange={onChangeTodo}
        type="text"
        placeholder="Add a Task"
      />
      <StyledSelect onChange={onChangeCategory}>
        <option value="salud">Salud</option>
        <option value="house">House</option>
        <option value="work">Work</option>
      </StyledSelect>
      <StyledButton>Save</StyledButton>
    </StyledForm>
  );
};

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.blue};
  color: #fff;
  font-weight: bold;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.blue};
    outline-offset: 2px;
  }
`;

const StyledSelect = styled.select`
  background: ${({ theme }) => theme.darkBlue};
  border: 2px solid ${({ theme }) => theme.lightPurple};
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
  color: ${({ theme }) => theme.white};
  &:focus {
    border: 2px solid ${({ theme }) => theme.blue};
  }
`;

const StyledInput = styled.input`
  border-radius: 0.5rem;
  background: transparent;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.lightPurple};
  color: ${({ theme }) => theme.white};
  outline: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.blue};
  }
`;

const StyledForm = styled.form`
  display: flex;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.darkBlue};
  gap: 1rem;

  ${StyledInput} {
    flex: 3;
  }

  ${StyledSelect},${StyledButton} {
    flex: 1;
  }
`;

export default FormTodos;
