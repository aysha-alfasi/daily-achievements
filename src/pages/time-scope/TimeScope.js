import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import classes from "./TimeScope.module.css";
import updateActions from "../../updatedActions";

function TimeScope() {
  const { state, actions } = useStateMachine({ updateActions });
  const { handleSubmit, register } = useForm({
    defaultValues: state.timeDetails,
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    actions.updateActions(data);
    navigate("/estimatedTime");
  };

  return (
    <>
      <div className={classes.main}>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
          <section>
            <label htmlFor="timeScopeStart">Starts</label>
            <input
              type="number"
              name="timeScopeStart"
              id="timeScopeStart"
              {...register("timeScope")}
            />

            <label htmlFor="timeScopeEnd">Ends</label>
            <input
              type="number"
              name="timeScopeEnd"
              id="timeScopeEnd"
              {...register("timeScope")}
            />
          </section>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default TimeScope;
