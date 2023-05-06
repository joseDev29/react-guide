import React, { useReducer } from "react";

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

const UseReducerPage = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        gap: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: 32 }}>{count}</span>
      <div style={{ display: "flex", gap: 16 }}>
        <button onClick={() => dispatch({ type: "MINUS" })}>-</button>
        <button onClick={() => dispatch({ type: "ADD" })}>+</button>
        <button onClick={() => dispatch({ type: "CHANGE", value: 5 })}>
          +5
        </button>
      </div>
    </div>
  );
};

export default UseReducerPage;
