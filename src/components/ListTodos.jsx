import styled from "styled-components";
import Todo from "./Todo";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/todoContext";
import empty from "../assets/images/empty.svg";
import { Select } from "./common/Select";

const ListTodos = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const [copyTodos, setCopyTodos] = useState([]);

  const filterByCategory = (e) => {
    const category = e.target.value;

    if (category === "all") {
      setCopyTodos(todos);
    } else {
      const todosByCategory = todos.filter(
        (todo) => todo.category === category
      );
      setCopyTodos(todosByCategory);
    }
  };

  const filterByAsc = (e) => {
    const date = e.target.value;

    if (date === "all") {
      const newTodos = [...todos].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setCopyTodos(newTodos);
    } else if (date === "desc") {
      const newTodos = [...todos].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setCopyTodos(newTodos);
    } else if (date === "asc") {
      const newTodos = [...todos].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      setCopyTodos(newTodos);
    }
  };

  const filterByCompleted = (e) => {
    const completed = e.target.value;

    if (completed === "completed") {
      const todosCompleted = todos.filter((todo) => todo.done === true);
      return setCopyTodos(todosCompleted);
    } else if (completed === "incomplete") {
      const todosUncomplete = todos.filter((todo) => todo.done === false);
      return setCopyTodos(todosUncomplete);
    }

    return setCopyTodos(todos);
  };

  useEffect(() => {
    setCopyTodos(todos);
  }, [todos]);

  return (
    <StyledListTodos>
      {todos.length > 0 ? (
        <>
          <h2>Total todos ({todos.length})</h2>
          <Filters>
            <Select
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
              eventOnChange={filterByAsc}
              items={[
                { id: "0", value: "all", label: "-- Date --" },
                { id: "1", value: "desc", label: "Last added" },
                { id: "2", value: "asc", label: "First added" },
              ]}
            />
            <Select
              size={0.5}
              eventOnChange={filterByCompleted}
              items={[
                { id: "0", value: "all", label: "-- All --" },
                { id: "1", value: "completed", label: "completed" },
                { id: "2", value: "incomplete", label: "incomplete" },
              ]}
            />
          </Filters>

          <StyledContentList>
            {copyTodos.map((todo, key) => (
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
