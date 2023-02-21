import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  background-color: #fff;
  margin: auto;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 400;
}
`;
