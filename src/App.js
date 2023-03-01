import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utilities/Theme";
import { MainBody, Container } from "./Styles/Global.styled.js";

//Components
import Showcase from "./Components/Showcase";
import MySkills from "./Components/MySkills";
import MyProjects from "./Components/MyProjects";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container>
          <Showcase />
          <MySkills />
          <MyProjects />
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
