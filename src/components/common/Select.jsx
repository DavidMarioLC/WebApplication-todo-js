import styled from "styled-components";

export const Select = ({ value, eventOnChange, items }) => {
  return (
    <StyledSelect value={value} onChange={eventOnChange}>
      {items.map((item) => (
        <option key={item.id} value={item.value}>
          {item.value}
        </option>
      ))}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  flex: 1;
  background: ${({ theme }) => theme.darkBlue};
  border: 2px solid ${({ theme }) => theme.lightPurple};
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  outline: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.white};
  &:focus {
    border: 2px solid ${({ theme }) => theme.blue};
  }
`;
