import styled from "styled-components";

export const Select = ({ size, value, eventOnChange, items }) => {
  return (
    <StyledSelect size={size} value={value} onChange={eventOnChange}>
      {items.map((item) => (
        <option key={item.id} value={item.value}>
          {item.label}
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
  padding: ${({ size }) => `${size}rem`};
  font-size: 1rem;
  outline: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.white};
  &:focus {
    border: 2px solid ${({ theme }) => theme.blue};
  }
`;
