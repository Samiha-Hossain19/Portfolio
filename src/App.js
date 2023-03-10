import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utilities/Theme";
import { MainBody, Container } from "./Styles/Global.styled.js";

//Components
import Showcase from "./Components/Showcase";
import MySkills from "./Components/MySkills";
import MyProjects from "./Components/MyProjects";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NavMenu from "./Layouts/NavMenu";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Container>
          <Showcase />
          <MySkills />
          <MyProjects />
          <Footer />
          <Navbar />
          <NavMenu />
        </Container>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
