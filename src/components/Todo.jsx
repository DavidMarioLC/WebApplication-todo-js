import styled from "styled-components";
import { useState, useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { BsTrash, BsCheckLg } from "react-icons/bs";
import { useTodo } from "../hooks/useTodo";
import { formatDate } from "../utils/formatDate";
import { ModalContext } from "../context/ModalContext";
import Modal from "./Modal";

const Todo = ({ todo }) => {
  const { modal } = useContext(ModalContext);
  const { deleteTodo, toggleTodo, editTodo } = useTodo();
  const { id, todo: valueTodo, category, done, date } = todo;
  return (
    <StyledTodo>
      <TodoContent>
        <LabelCheckbox>
          <input
            checked={done}
            onChange={(e) => toggleTodo(e, id)}
            className="input"
            type="checkbox"
            hidden
          />
          <Checkbox className="checkbox">
            <CheckboxIcon className="checkbox-icon" />
          </Checkbox>
        </LabelCheckbox>
        <Text done={done}>{valueTodo}</Text>
        <Badge>{category}</Badge>
        <Time>{formatDate(date)}</Time>
      </TodoContent>
      <TodoActions>
        <Edit
          onClick={() => {
            editTodo(id);
          }}
        >
          <FiEdit />
        </Edit>
        <Delete onClick={() => deleteTodo(id)}>
          <BsTrash />
        </Delete>
      </TodoActions>
      {modal ? <Modal /> : null}
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

const ButtonTodo = styled.button`
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

const Delete = styled(ButtonTodo)`
  color: ${({ theme }) => theme.red};
`;

const Edit = styled(ButtonTodo)`
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
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
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
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Text = styled.p`
  text-decoration: ${({ done }) => (done ? "line-through" : null)};
  font-style: ${({ done }) => (done ? " italic" : null)};
`;

export default Todo;
