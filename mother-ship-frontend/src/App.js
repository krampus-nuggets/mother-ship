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
            <Box display="flex" justifyContent="space-between" bg="#ff8b0f" m={ 0 } p={ 2 } color="white">
              <Link href="/" m="auto" isInternal>
                <Heading className="ms-nav-head" bg="black" color="#ff8b0f" rounded="md" p={ 2 } size="md" textAlign="center">
                  Mother-Ship
                </Heading>
              </Link>
            </Box>
        </div>
        <div id="ms-body-components">
          <Routes />
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App;