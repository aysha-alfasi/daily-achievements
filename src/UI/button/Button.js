import "./Button.css";

function Button(props) {
  return (
    <button
      className={props.className}
      type={props.type}
      onClick={props.handleClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
