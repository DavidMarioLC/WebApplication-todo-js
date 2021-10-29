import styled from "styled-components";
import Todo from "./Todo";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/todoContext";
import empty from "../assets/images/empty.svg";
import { Select } from "./common/Select";

const ListTodos = () => {
  const [todos, setTodos, filterByCategory] = useContext(TodoContext);
  let newTodos = [];

  const [filters, setFilters] = useState({
    category: "all",
    date: "all",
    all: "all",
  });

  return (
    <StyledListTodos>
      {todos.length > 0 ? (
        <>
          <h2>Total todos ({todos.length})</h2>
          <Filters>
            <Select
              value={filters.category}
              eventOnChange={filterByCategory}
              size={0.5}
              items={[
                { id: "0", value: "all", label: "-- category --" },
                { id: "1", value: "salud", label: "salud" },
                { id: "2", value: "house", label: "house" },
                { id: "3", value: "work", label: "work" },
              ]}
            />
            <Select
              size={0.5}
              items={[
                { id: "0", value: "all", label: "-- Date --" },
                { id: "1", value: "Last added", label: "Last added" },
                { id: "2", value: "First added", label: "First added" },
              ]}
            />
            <Select
              size={0.5}
              items={[
                { id: "0", value: "all", label: "-- All --" },
                { id: "1", value: "completed", label: "completed" },
                { id: "2", value: "incomplete", label: "incomplete" },
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
  flex-wrap: wrap;
  gap: 1rem;
`;

export default ListTodos;
