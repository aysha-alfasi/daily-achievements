import { useState } from "react";
import classes from "./MainPage.module.css";
import Button from "../../UI/button/Button";
import TimeDetails from "./time-details-components/TimeDetails";

function MainPage() {
    const [show, setShow] = useState(false);

 const handleClick = () => {

    setShow(current => !current);
    
      }; 

  return (
    <>
      <div className={classes.MainPageContent}>
        <form className={classes.form}>
          <label className={classes.label} for="add-task">
            {" "}
            Add Your first Task
          </label>
          <input
            className={classes.input}
            type="text"
            id="add-task"
            name="add-task"
            placeholder="Describe Your Task"
          ></input>
          <Button className='Button' type='button' handleClick={handleClick} size='lg' >
           Time Details </Button>
          <p>A goal without a specific time is an illusion</p>
        </form>
      </div>
      {show ? <TimeDetails/> : null}
    </>
  );
}

export default MainPage;
