import { useForm } from "react-hook-form";
import classes from "./MainPage.module.css";
import { createStore } from "little-state-machine";
import { useStateMachine } from "little-state-machine";

import updateActions from "../../updatedActions";
import { useNavigate, Outlet } from "react-router-dom";

function MainPage() {
  createStore({
    timeDetails: {},
  });

  const navigate = useNavigate();
  const { state, actions } = useStateMachine({ updateActions });
  const { handleSubmit, register } = useForm({
    defaultValues: state.timeDetails,
  });

  const onSubmit = (data) => {
    actions.updateActions(data);
    navigate("/mainPage/timeDetails");
  };

  return (
    <>
      <div className={classes.MainPageContent}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <label className={classes.label} htmlFor="add-task">
            Add Your first Task
          </label>
          <div className={classes.inputSubmitWrapper}>
            <input
              className={classes.input}
              type="text"
              id="add-task"
              name="add-task"
              placeholder="Describe Your Task"
              {...register("taskName")}
            />

            <input className={classes.submit} type="submit" value="Add" />
          </div>
        </form>
      </div>

      <Outlet />
    </>
  );
}

export default MainPage;
