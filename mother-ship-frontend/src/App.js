import React from "react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import NavBar from "./components/NavBar";
import LowerNav from "./components/LowerNav";
import Routes from "./Routes";
import "./styles/styles.css";

const App = () => {
  return(
    <ThemeProvider>
      <ColorModeProvider>
        <div id="ms-body-components">
          <div id="mother-ship-nav">
              <NavBar />
              <LowerNav />
          </div>
          <div id="ms-body-containers">
            <Routes />
          </div>
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App;