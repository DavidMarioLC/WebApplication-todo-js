import styled from "styled-components";
import Todo from "./Todo";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import empty from "../assets/images/empty.svg";
import { Select } from "./common/Select";

const ListTodos = () => {
  const [todos] = useContext(TodoContext);

  return (
    <StyledListTodos>
      {todos.length > 0 ? (
        <>
          <h2>Total todos ({todos.length})</h2>
          <Filters>
            <Select
              size={0.5}
              items={[
                { id: "1", value: "salud" },
                { id: "2", value: "house" },
                { id: "3", value: "work" },
              ]}
            />
            <Select
              size={0.5}
              items={[
                { id: "1", value: "salud" },
                { id: "2", value: "house" },
                { id: "3", value: "work" },
              ]}
            />
            <Select
              size={0.5}
              items={[
                { id: "1", value: "salud" },
                { id: "2", value: "house" },
                { id: "3", value: "work" },
              ]}
            />
          </Filters>

          <StyledContentList>
            {todos.map((todo, key) => (
              <Todo key={key} todo={todo} />
            ))}
          </StyledContentList>
        </>
      ) : (
        <ContainerEmpty>
          <StyleEmpty src={empty} width={250} height={250} alt="empty image" />
          <p>Aún no tienes tareas pendientes.</p>
        </ContainerEmpty>
      )}
    </StyledListTodos>
  );
};

const StyledListTodos = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledContentList = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 1rem;
  overflow-y: auto;
  height: 380px;
  padding-right: 1rem;
`;

const ContainerEmpty = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyleEmpty = styled.img`
  max-width: 100%;
`;

const Filters = styled.div`
  display: flex;
  gap: 1rem;
`;

export default ListTodos;
