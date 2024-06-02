import { Outlet, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import Button from "../../UI/button/Button";
function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/mainPage");
  };
  return (
    <>
      <div className={classes.headerTxt}>
        <h1 className={classes.title}>Daily achievements</h1>
        <h2 className={classes.subTitle}>
          Just plan accurately and get it done!
        </h2>

        <div className={classes.btn}>
          <Button handleClick={handleClick}>Add your Task!</Button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
