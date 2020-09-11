import './App.css';
import { theme } from "@chakra-ui/core";
import React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import NavBar from './components/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
