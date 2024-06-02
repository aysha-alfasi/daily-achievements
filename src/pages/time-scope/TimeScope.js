import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import classes from "./TimeScope.module.css";
import updateActions from "../../updatedActions";
import TimeInput from "../../UI/button/TimeInput";

function TimeScope() {
  const { state, actions } = useStateMachine({ updateActions });
  const { handleSubmit, register } = useForm({
    defaultValues: state.timeDetails,
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    actions.updateActions(data);
    navigate("/mainPage/timeDetails/estimatedTime");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <div className={classes.timeWrapper}>
          <section>
            <TimeInput
              name="timeScope-start"
              id="timeScope-start"
              register={register}
            />

            <TimeInput
              name="timeScope-end"
              id="timeScope-end"
              register={register}
            />
          </section>
        </div>

        <input type="submit" />
      </form>
    </>
  );
}

export default TimeScope;
