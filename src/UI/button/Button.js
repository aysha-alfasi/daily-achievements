import classes from "./Button.module.css";

function Button(props) {
  return (
    <button className={classes.Button} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;
