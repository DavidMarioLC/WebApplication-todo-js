import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 600px;
  height: 100vh;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
