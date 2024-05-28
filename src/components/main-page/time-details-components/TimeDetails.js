import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { createStore } from "little-state-machine";
import classes from "./TimeDetails.module.css";
import TimeCategory from "../../../pages/time-category/TimeCategory";
import TimeScope from "../../../pages/time-scope/TimeScope";
import EstimatedTime from "../../../pages/estimated-time/EstimatedTime";
import Schedule from "../../../pages/Schedule";

export default function TimeDetails() {
  createStore({
    timeDetails: {},
  });

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <div className={classes.main}>
        <div className={classes.tabs}>
          <menu>
            <button
              className={
                location.pathname === "/timeCategory" ? "active" : classes.tBtn
              }
              onClick={() => navigate("/timeCategory")}
            >
              Time Category
            </button>

            <button
              className={
                location.pathname === "/timeScope" ? "active" : classes.tBtn
              }
              onClick={() => navigate("/timeScope")}
            >
              Time Scope
            </button>
            <button
              className={
                location.pathname === "/estimatedTime" ? "active" : classes.tBtn
              }
              onClick={() => navigate("/estimatedTime")}
            >
              Estimated Time
            </button>
          </menu>
          <Routes>
            <Route path="/timeCategory" element={<TimeCategory />} />
            <Route path="/timeScope" element={<TimeScope />} />
            <Route path="/estimatedTime" element={<EstimatedTime />} />
            <Route path="/schedulePage" element={<Schedule />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
