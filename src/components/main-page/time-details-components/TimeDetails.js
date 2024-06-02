import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { createStore } from "little-state-machine";
import classes from "./TimeDetails.module.css";

export default function TimeDetails() {
  createStore({
    timeDetails: {},
  });

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <p className={classes.p}>A goal without a specific time is an illusion</p>

      <div className={classes.main}>
        <div className={classes.tabs}>
          <menu>
            <button
              className={
                location.pathname === "/mainPage/timeDetails/timeCategory"
                  ? "active"
                  : classes.tBtn
              }
              onClick={() => navigate("timeCategory")}
            >
              Time Category
            </button>

            <button
              className={
                location.pathname === "/mainPage/timeDetails/timeScope"
                  ? "active"
                  : classes.tBtn
              }
              onClick={() => navigate("timeScope")}
            >
              Time Scope
            </button>
            <button
              className={
                location.pathname === "/mainPage/timeDetails/estimatedTime"
                  ? "active"
                  : classes.tBtn
              }
              onClick={() => navigate("estimatedTime")}
            >
              Estimated Time
            </button>
          </menu>
          <Outlet />
        </div>
      </div>
    </>
  );
}
