import classes from "./TimeCategory.module.css";

function TimeCategory() {
  return (
    <>
      <form className={classes.form}>
        <section>
          <input
            id="Morning"
            type="radio"
            name="timeCategory"
            value="Morning"
          ></input>

          <label for="Morning">Morning</label>

          <input
            id="Eavning"
            type="radio"
            name="timeCategory"
            value="Eavning"
          ></input>

          <label for="Eavning">Eavning</label>
          <input
            id="Afternon"
            type="radio"
            name="timeCategory"
            value="Afternon"
          ></input>

          <label for="Afternon">Afternon</label>
        </section>
      </form>
    </>
  );
}

export default TimeCategory;
