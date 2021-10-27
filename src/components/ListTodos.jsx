import styled from "styled-components";
import Todo from "./Todo";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

const ListTodos = () => {
  const [todos] = useContext(TodoContext);

  return (
    <StyledListTodos>
      {todos.length > 0 ? (
        <>
          <h2>Total todos ({todos.length})</h2>
          <StyledContentList>
            {todos.map((todo, key) => (
              <Todo key={key} todo={todo} />
            ))}
          </StyledContentList>
        </>
      ) : (
        <p>no hay todos pendientes.</p>
      )}
    </StyledListTodos>
  );
};

const StyledListTodos = styled.div`
  flex: 1;
`;

const StyledContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default ListTodos;
