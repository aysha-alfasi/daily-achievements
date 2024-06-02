import { useForm } from "react-hook-form";
import { useNavigate, Outlet } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import classes from "./TimeCategory.module.css";
import updateActions from "../../../src/updatedActions";
import RadioButton from "../../UI/button/RadioButton";

function TimeCategory() {
  const { state, actions } = useStateMachine({ updateActions });
  const { handleSubmit, register } = useForm({
    defaultValues: state.timeDetails,
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    actions.updateActions(data);
    navigate("/mainPage/timeDetails/timeScope");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <section>
          <RadioButton
            name="timeCategory"
            id="Morning"
            value="Morning"
            text="Morning"
            checked={state.morning}
            register={register}
          />
          <RadioButton
            name="timeCategory"
            id="Eavning"
            value="Eavning"
            text="Eavning"
            checked={state.eavning}
            register={register}
          />
          <RadioButton
            name="timeCategory"
            id="Afternon"
            value="Afternon"
            text="Afternon"
            checked={state.afternon}
            register={register}
          />
        </section>

        <input type="submit" value="Next" />
      </form>
      <Outlet />
    </>
  );
}

export default TimeCategory;
