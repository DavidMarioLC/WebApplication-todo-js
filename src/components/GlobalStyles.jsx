import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    margin:0;
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.white};
    transition: all 0.50s linear;
  }
  p{
    margin:0;
  }
`;

export default GlobalStyles;
