import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
import Header from "./components/header/Header";
import MainPage from "./components/main-page/MainPage";
import "./App.css";

function App() {
  return (
    <>
      <StateMachineProvider>
        <DevTool />
        <div>
          <Router>
            <Header />
            <MainPage />
          </Router>
        </div>
      </StateMachineProvider>
    </>
  );
}

export default App;
