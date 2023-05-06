import { useRef } from "react";

const UseRefPage = () => {
  const ref = useRef();
  const isActive = useRef(false);

  return (
    <div ref={ref} style={{ height: "100vh", overflow: "auto" }}>
      <button
        onClick={() => {
          if (isActive.current) {
            ref.current.scroll(0, 500);
            isActive.current = false;
          } else {
            isActive.current = true;
          }
        }}
      >
        scroll
      </button>
      <h1>{isActive.current.toString()}</h1>
      <div style={{ background: "red", height: 500, width: "100%" }}></div>
      <div style={{ background: "blue", height: 500, width: "100%" }}></div>
      <div style={{ background: "yellow", height: 500, width: "100%" }}></div>
      <div style={{ background: "green", height: 500, width: "100%" }}></div>
      <div style={{ background: "gray", height: 500, width: "100%" }}></div>
    </div>
  );
};

export default UseRefPage;
