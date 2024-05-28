import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import classes from "./EstimatedTime.module.css";
import updateActions from "../../updatedActions";

function EstimatedTime() {
  const { state, actions } = useStateMachine({ updateActions });
  const { handleSubmit, register } = useForm({
    defaultValues: state.timeDetails,
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    actions.updateActions(data);
    navigate("/schedulePage");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <section>
          <div className={classes.inputWrapper}>
            <input
              id="15m"
              type="radio"
              name="estimatedTime"
              value="Around 15m"
              {...register("estimatedTime")}
            />

            <label htmlFor="15m">Around 15m</label>
          </div>
          <div className={classes.inputWrapper}>
            <input
              id="Hour-2Hours"
              type="radio"
              name="estimatedTime"
              value="Hour- 2 Hours"
              {...register("estimatedTime")}
            />

            <label htmlFor="Hour-2Hours">1 to 2 Hours</label>
          </div>
          <div className={classes.inputWrapper}>
            <input
              id="3Hours-5Hours"
              type="radio"
              name="estimatedTime"
              value="3 Hours- 5 Hours"
              {...register("estimatedTime")}
            />

            <label htmlFor="3Hours-5Hours">3 to 5 Hours</label>
          </div>
        </section>
        <p>Breaking long tasks into shorter ones is a good idea</p>
        <input type="submit" />
      </form>
    </>
  );
}

export default EstimatedTime;
