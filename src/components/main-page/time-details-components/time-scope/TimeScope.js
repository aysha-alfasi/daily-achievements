import classes from "./TimeScope.module.css";

function TimeScope() {
  return (
    <>
      <div className={classes.main}>
        <form className={classes.form}>
          <section>
            <label for="timeScopeStart">Starts</label>
            <input
              type="number"
              name="timeScopeStart"
              id="timeScopeStart"
            ></input>

            <label for="timeScopeEnd">Ends</label>
            <input type="number" name="timeScopeEnd" id="timeScopeEnd"></input>
          </section>
        </form>
      </div>
    </>
  );
}

export default TimeScope;
