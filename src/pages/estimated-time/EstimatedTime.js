import { useState } from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import classes from "./EstimatedTime.module.css";
import updateActions from "../../updatedActions";
import Modal from "../../UI/Modal";

function EstimatedTime() {
  const [open, setOpen] = useState(false);

  const { state, actions } = useStateMachine({ updateActions });
  const { handleSubmit, register, reset } = useForm({
    defaultValues: state.timeDetails,
  });

  const onSubmit = (data) => {
    actions.updateActions(data);
    reset();
  };

  return (
    <>
      {open && <Modal closeModal={setOpen} />}
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <select
          name="estimatedTime"
          id="estimatedTime"
          {...register("estimatedTime")}
        >
          <option value="Around 15m">Around 15m</option>
          <option value="1Hour-2Hours">1Hour-2Hours</option>
          <option value="2Hours-3Hours">2Hours-3Hours</option>
          <option value="4Hours-5Hours">4Hours-5Hours</option>
        </select>
        <p>Breaking long tasks into shorter ones is a good idea</p>
        <input
          type="submit"
          onClick={() => {
            setOpen(true);
          }}
        />
      </form>
    </>
  );
}

export default EstimatedTime;
