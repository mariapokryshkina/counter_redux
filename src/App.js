import React from "react";
import Circle from "./components/Circle";
import Button from "./components/UI/Button";
import { useDispatch } from "react-redux";
import * as actionTypes from "./store/actions";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Circle />
      <Button onClick={() => dispatch({ type: actionTypes.INCREASE_ONE })}>
        Add one
      </Button>
      <Button
        onClick={() =>
          dispatch({ type: actionTypes.INCREASE_FIVE, payload: 5 })
        }
      >
        Add five
      </Button>

      <Button onClick={() => dispatch({ type: actionTypes.RESET })}>
        Reset
      </Button>

      <Button onClick={() => dispatch({ type: actionTypes.REMOVE_ONE })}>
        Remove one
      </Button>

      <Button
        onClick={() => dispatch({ type: actionTypes.REMOVE_FIVE, payload: 5 })}
      >
        Remove five
      </Button>
     
    </div>
  );
};

export default App;
