import { useReducer } from "react";

const reducer = (currentCount, action) => {
  switch (action.type) {
    case "ADD":
      return currentCount + 1;

    case "MINUS":
      return currentCount - 1;

    case "CHANGE":
      return currentCount + action.value;
  }
};

export const useCounter = (initialCount) => {
  const [count, dispatch] = useReducer(reducer, initialCount);

  const substract = () => dispatch({ type: "MINUS" });

  const add = () => dispatch({ type: "ADD" });

  const change = (value) => dispatch({ type: "CHANGE", value });

  return { count, substract, add, change };
};
