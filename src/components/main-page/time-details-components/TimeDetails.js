import { useState } from "react";
import classes from "./TimeDetails.module.css";
import Button from "../../../UI/button/Button";
import TimeCategory from "./time-category/TimeCategory";
import TimeScope from "./time-scope/TimeScope";
import EstimatedTime from "./estimated-time/EstimatedTime";


export default function TimeDetails() {
  const [showTimeCategory, setShowTimeCategory] = useState(true);
  const [showTimeScope, setShowTimeScope] = useState(false);
  const [showTimeEstimated, setShowTimeEstimated] = useState(false);

  const firstTabHandleClick = () => {
    setShowTimeCategory((current) => !current);
    setShowTimeScope(false);
    setShowTimeEstimated(false);
  };
  const secondTabHandleClick = () => {
    setShowTimeScope((current) => !current);
    setShowTimeCategory(false);
    setShowTimeEstimated(false);
  };
  const thirdTabHandleClick = () => {
    setShowTimeEstimated((current) => !current);
    setShowTimeCategory(false);
    setShowTimeScope(false);
  };

  return (
    <div className={classes.main}>
      <div className={classes.tabs}>
        <menu>
          <button className={showTimeCategory === true ? 'active' : classes.tBtn} onClick={firstTabHandleClick}>
            Time Category
          </button>
          <button className={showTimeScope === true ? 'active' : classes.tBtn} onClick={secondTabHandleClick}>
            Time Scope
          </button>
          <button className={showTimeEstimated === true ? 'active' : classes.tBtn} onClick={thirdTabHandleClick}>
            Estimated Time
          </button>
        </menu>
        {showTimeCategory ? <TimeCategory /> : null}
        {showTimeScope ? <TimeScope /> : null}
        {showTimeEstimated ? <EstimatedTime /> : null}
        <div className={classes.confirmBtns}>
          <Button className={classes.confirmBtn}>Add Current Task</Button>
          <Button>Add for Shedule</Button>
        </div>
      </div>
    </div>
  );
}
