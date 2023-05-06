import { useState } from "react";
import "./UseStatePage.css";

const CountButtons = ({ count, setCount }) => {
  const onClickAdd = () => {
    setCount((currentCount) => {
      return {
        value: currentCount.value + 1,
      };
    });
  };

  const onClickSubstract = () => {
    setCount({ value: count.value - 1 });
  };

  return (
    <div className="use-state-page__actions">
      <button onClick={onClickSubstract}>-</button>
      <button onClick={() => onClickAdd()}>+</button>
    </div>
  );
};

const UseStatePage = () => {
  const [count, setCount] = useState({ value: 0 });

  return (
    <div className="use-state-page">
      <span className="user-state-page__count">{count.value}</span>
      <CountButtons count={count} setCount={setCount} />
    </div>
  );
};

export default UseStatePage;
