//import classes from "./Schedule.module.css";
import { useStateMachine } from "little-state-machine";
import updateActions from "../updatedActions";

const Schedule = (props) => {
  const { state } = useStateMachine(updateActions);

  return (
    <div>
      <h2>Schedule</h2>
      <pre>{JSON.stringify(state, null, 3)}</pre>
    </div>
  );
};

export default Schedule;
