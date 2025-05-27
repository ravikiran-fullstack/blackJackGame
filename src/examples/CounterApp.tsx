/*
    (my understanding of useReducer hook and its uses)
    -- useReducer hook is used to manage state in a react application
    -- it takes two parameters: a reducer function and initial state of the application
    -- reducer function is a pure function that takes two parameters: state and action
    -- state is of the same type as initial state of the app
    -- action is of type {type: string} where type defines type of action needs to be performed on current state
    -- useReducer hook returns two parameters, current state of the app and a dispatch function
    -- current state is of same type as initial state
    -- dispatch function takes an object of type {type: string}
    -- user can use and call this dispatch function to update the state of the application.
*/

import { CounterActionType } from "./types";
import { useCounter } from "./useCounter";

const CounterApp = () => {
  const { state, dispatch } = useCounter();
  console.log(state);

  //   const [count, setCount] = useState(0);

  const increaseCount = () => {
    dispatch({
      type: CounterActionType.INCREMENT,
      payload: Math.ceil(Math.random() * 10),
    });
    // setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    dispatch({
      type: CounterActionType.DECREMENT,
      payload: Math.ceil(Math.random() * 10),
    });
    // setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h4>Counter App</h4>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={decreaseCount}>Decrease Count</button>
        <p>Count: {state.count}</p>
        <button onClick={increaseCount}>Increase Count</button>
      </div>
    </div>
  );
};

export default CounterApp;
