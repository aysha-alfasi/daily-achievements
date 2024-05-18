import classes from "./Button.module.css";

function Button(props) {
  return (
    <button className={classes.Button} type={props.type} onClick={props.handleClick}>
      {props.children}
    </button>
  );
}

export default Button;
