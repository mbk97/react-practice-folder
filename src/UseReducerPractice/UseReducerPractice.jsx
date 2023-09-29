import React, { useReducer } from "react";

const reducerFunction = (state, action) => {
  const { type } = action;
  switch (type) {
    case "Increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Oga, the count cannot be greater than 5" : null,
      };
    }

    case "Decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Count cannot be less than 5" : null,
      };
    }

    default:
      return state;
  }
};

const UseReducerPractice = () => {
  const [state, dispatch] = useReducer(reducerFunction, {
    count: 0,
    error: null,
  });

  return (
    <div>
      <h3 className="text-[red]">{state.error}</h3>
      <h1>{state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "Increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "Decrement" })}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerPractice;
