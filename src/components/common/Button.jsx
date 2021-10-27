import styled from "styled-components";

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.blue};
  padding: 1rem;
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
