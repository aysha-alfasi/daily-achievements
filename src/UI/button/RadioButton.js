import classes from "./RadioButton.module.css";

function RadioButton({ name, id, value, checked, text, register, ...rest }) {
  return (
    <label className={classes.radioLabel} htmlFor={id}>
      <input
        className={classes.radioInput}
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        {...register(name)}
        {...rest}
      />
      <span className={classes.customRadio} />
      {text}
    </label>
  );
}

export default RadioButton;
