import classes from "./MainPage.module.css";
import Button from "../../UI/button/Button";

function MainPage() {
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
          <Button type="submit"> Time Details </Button>
          <p>A goal without a specific time is an illusion</p>
        </form>
      </div>
    </>
  );
}

export default MainPage;
