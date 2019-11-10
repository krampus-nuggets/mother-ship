import React from "react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import { Box, Heading } from "@chakra-ui/core";
import Home from "./containers/Home";
import "./styles/styles.css";

const App = () => {
  return(
    <ThemeProvider>
      <ColorModeProvider>
        <div id="mother-ship-nav">
            <Box display="flex" justifyContent="space-between" bg="#ff8b0f" m={ 0 } p={ 2 } color="white">
              <Heading className="ms-nav-head" bg="black" color="#ff8b0f" rounded="md" p={ 2 } size="md" textAlign="center">
                Mother-Ship
              </Heading>
            </Box>
        </div>
        <div id="ms-body-components">
          <Home/>
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App;