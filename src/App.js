import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utilities/Theme";
import { MainBody } from "./Styles/Global.styled.js";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainBody />
    </ThemeProvider>
  );
};

export default App;
