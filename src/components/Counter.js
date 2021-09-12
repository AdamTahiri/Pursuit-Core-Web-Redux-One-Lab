import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCount, incrementCount, incrementCountBy, resetCount, incrementOnlyIfEven } from "../actions/counterActions"; 

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);

  const onDecrement = () => {
    dispatch(decrementCount())
  };
  const onIncrement = () => {
    dispatch(incrementCount())
  };
  const incrementBy = () => {
    dispatch(incrementCountBy())
  };
  const incrementIfEven = () => {
    dispatch(incrementOnlyIfEven())
  };
  const reset = () => {
    dispatch(resetCount())
  };

  return (
    <div>
      <p>count: {count}</p>
      <p>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={reset}>reset</button>
      </p>
      <input type="number" />
      <button onClick={incrementBy}>+</button>
      <button onClick={incrementIfEven}>If Even</button>
    </div>
  );
};

export default Counter;
