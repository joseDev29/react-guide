import { useContext, useState, createContext, useEffect } from "react";

const CountContext = createContext();

const CountValue = () => {
  const countContext = useContext(CountContext);

  return <span>{countContext.count}</span>;
};

const CountActions = () => {
  const countContext = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() =>
          countContext.setCount((currentCount) => currentCount - 1)
        }
      >
        -
      </button>
      <button
        onClick={() =>
          countContext.setCount((currentCount) => currentCount + 1)
        }
      >
        +
      </button>
    </div>
  );
};

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

const UseContextPage = () => {
  return (
    <CountProvider>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CountValue />
        <CountActions />
      </div>
    </CountProvider>
  );
};

export default UseContextPage;
