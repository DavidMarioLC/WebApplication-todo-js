import styled from "styled-components";

export const Input = ({ value, eventChange }) => {
  return (
    <StyledInput
      value={value}
      onChange={eventChange}
      type="text"
      placeholder="Add a Task"
    />
  );
};

const StyledInput = styled.input`
  flex: 3;
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
