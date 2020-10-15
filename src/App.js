import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Dashboard />
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
