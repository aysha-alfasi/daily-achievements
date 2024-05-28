import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import classes from "./TimeCategory.module.css";
import updateActions from "../../../src/updatedActions";

function TimeCategory() {
  const { state, actions } = useStateMachine({ updateActions });
  const { handleSubmit, register } = useForm({
    defaultValues: state.timeDetails,
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    actions.updateActions(data);
    navigate("/timeScope");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <section>
          <input
            id="Morning"
            type="radio"
            name="timeCategory"
            value="Morning"
            {...register("timeCategory")}
          />

          <label htmlFor="Morning">Morning</label>

          <input
            id="Eavning"
            type="radio"
            name="timeCategory"
            value="Eavning"
            {...register("timeCategory")}
          />

          <label htmlFor="Eavning">Eavning</label>
          <input
            id="Afternon"
            type="radio"
            name="timeCategory"
            value="Afternon"
            {...register("timeCategory")}
          />

          <label htmlFor="Afternon">Afternon</label>
        </section>
        <input type="submit" />
      </form>
    </>
  );
}

export default TimeCategory;
