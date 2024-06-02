import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
import Button from "./button/Button";


function Modal({ closeModal }) {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/mainPage");
  };

  const toSchedule = () => {
    navigate("/schedulePage");
  };

  return createPortal(
    <>
      <div className={classes.modalBackground}>
        <div className={classes.modalContainer}>
          <div className={classes.titleCloseBtn}>
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className={classes.title}></div>
          <div className={classes.body}> Your Task Added seccesfully! </div>
          <div className={classes.footer}>
            <Button handleClick={toSchedule}>Go to Schedule</Button>
            <Button handleClick={toHome}>Add another Task</Button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
