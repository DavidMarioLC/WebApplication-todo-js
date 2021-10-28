import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 600px;
  height: calc(100vh - 2rem);

  padding: 2rem 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
