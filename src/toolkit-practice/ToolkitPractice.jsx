import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/slice";
import "./style.css";

const ToolkitPractice = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(9));
  };

  return (
    <div>
      <h1>{count}</h1>
      <div className="flex items-center g-10">
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleIncrementByAmount}>increment By Amount</button>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </div>
  );
};

export default ToolkitPractice;
