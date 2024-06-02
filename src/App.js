import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { StateMachineProvider } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
import Home from "./components/header/Header";
import MainPage from "./components/main-page/MainPage";
import "./App.css";
import Schedule from "./pages/Schedule";
import TimeCategory from "./pages/time-category/TimeCategory";
import TimeScope from "./pages/time-scope/TimeScope";
import EstimatedTime from "./pages/estimated-time/EstimatedTime";
import TimeDetails from "./components/main-page/time-details-components/TimeDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="mainPage" element={<MainPage />}>
        <Route path="timeDetails" element={<TimeDetails />}>
          <Route path="timeCategory" element={<TimeCategory />} />
          <Route path="timeScope" element={<TimeScope />} />
          <Route path="estimatedTime" element={<EstimatedTime />} />
        </Route>
      </Route>
      <Route path="schedulePage" element={<Schedule />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <StateMachineProvider>
        <DevTool />
        <RouterProvider router={router} />
      </StateMachineProvider>
    </>
  );
}

export default App;
