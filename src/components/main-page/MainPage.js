import { useState } from "react";
import { useForm } from "react-hook-form";
import classes from "./MainPage.module.css";
import { createStore } from "little-state-machine";
import { useStateMachine } from "little-state-machine";
import updateActions from "../../updatedActions";
import TimeDetails from "./time-details-components/TimeDetails";

function MainPage() {
  createStore({
    timeDetails: {},
  });

  const { state, actions } = useStateMachine({ updateActions });
  const { handleSubmit, register } = useForm({
    defaultValues: state.timeDetails,
  });

  const onSubmit = (data) => {
    actions.updateActions(data);
  };

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((current) => !current);
  };

  return (
    <>
      <div className={classes.MainPageContent}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <label className={classes.label} htmlFor="add-task">
            Add Your first Task
          </label>
          <input
            className={classes.input}
            type="text"
            id="add-task"
            name="add-task"
            placeholder="Describe Your Task"
            {...register("taskName")}
          />
          <input
            className={classes.submit}
            type="submit"
            value="Time Details"
            onClick={handleClick}
          />
          <p>A goal without a specific time is an illusion</p>
        </form>
      </div>
      {show ? <TimeDetails /> : null}
    </>
  );
}

export default MainPage;
