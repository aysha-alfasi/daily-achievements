import classes from "./EstimatedTime.module.css";

function EstimatedTime() {
  return (
    <>
      <form className={classes.form}>
        <section>
          <div className={classes.inputWrapper}>
            <input
              id="15m"
              type="radio"
              name="timeCategory"
              value="Around 15m"
            ></input>

            <label for="15m">Around 15m</label>
          </div>
          <div className={classes.inputWrapper}>
            <input
              id="Hour-2Hours"
              type="radio"
              name="timeCategory"
              value="Hour- 2 Hours"
            ></input>

            <label for="Hour-2Hours">1 to 2 Hours</label>
          </div>
          <div className={classes.inputWrapper}>
            <input
              id="3Hours-5Hours"
              type="radio"
              name="timeCategory"
              value="3 Hours- 5 Hours"
            ></input>

            <label for="3Hours-5Hours">3 to 5 Hours</label>
          </div>
        </section>
        <p>Breaking long tasks into shorter ones is a good idea</p>
      </form>
    </>
  );
}

export default EstimatedTime;
