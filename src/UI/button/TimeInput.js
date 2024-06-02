import classes from "./TimeInput.module.css";

function TimeInput({ id, label, name, register, ...rest }) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        type="time"
        {...register(name)}
        className={classes.timeInput}
        {...rest}
      />
    </p>
  );
}

export default TimeInput;
