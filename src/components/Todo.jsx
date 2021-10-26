import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { BsTrash, BsCheckLg } from "react-icons/bs";
import { useState } from "react";

const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(false);

  const handlerCheckbox = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  };

  const { id, todo: valueTodo, category, done } = todo;
  return (
    <StyledTodo>
      <TodoContent>
        <LabelCheckbox>
          <input
            onChange={handlerCheckbox}
            className="input"
            type="checkbox"
            hidden
          />
          <Checkbox className="checkbox">
            <CheckboxIcon className="checkbox-icon" />
          </Checkbox>
        </LabelCheckbox>
        <Text>{valueTodo}</Text>
        <Badge>{category}</Badge>
        <Time>24 de octubre 10:24</Time>
      </TodoContent>
      <TodoActions>
        <Edit>
          <FiEdit />
        </Edit>
        <Delete>
          <BsTrash />
        </Delete>
      </TodoActions>
    </StyledTodo>
  );
};

const LabelCheckbox = styled.label`
  .checkbox-icon {
    opacity: 0;
  }

  .checkbox-icon:active {
    color: white;
    opacity: 1;
  }

  input:checked ~ .checkbox {
    background: ${({ theme }) => theme.pink};
    border: 1px solid transparent;
  }

  .input:checked ~ .checkbox > .checkbox-icon {
    opacity: 1;
  }
`;

const CheckboxIcon = styled(BsCheckLg)``;

const Checkbox = styled.span`
  cursor: pointer;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.lightPurple};
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms linear;
  &:active {
    transform: scale(0.92);
  }
  &:hover {
    background: ${({ theme }) => theme.lightPurple};
  }
`;

const Delete = styled(Button)`
  color: ${({ theme }) => theme.red};
`;

const Edit = styled(Button)`
  color: ${({ theme }) => theme.green};
`;

const Time = styled.time`
  color: ${({ theme }) => theme.lightPurple};
`;

const Badge = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  background: ${({ theme }) => theme.white};
  color: black;
  border-radius: 1rem;
  padding: 0.2rem 0.5rem;
`;

const TodoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const TodoActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledTodo = styled.div`
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.darkBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Text = styled.p`
  /* text-decoration: line-through; */
`;

export default Todo;
