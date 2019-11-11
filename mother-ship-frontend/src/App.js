import React from "react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import NavBar from "./components/NavBar";
import Routes from "./Routes";
import "./styles/styles.css";

const App = () => {
  return(
    <ThemeProvider>
      <ColorModeProvider>
        <div id="mother-ship-nav">
            <NavBar />
        </div>
        <div id="ms-body-components">
          <Routes />
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App;