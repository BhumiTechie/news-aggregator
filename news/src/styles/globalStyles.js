import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#ffffff",
  text: "#333333",
};

export const darkTheme = {
  body: "#333333",
  text: "#ffffff",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;
