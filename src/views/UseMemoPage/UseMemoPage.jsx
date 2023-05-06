import { useEffect, useMemo, useState } from "react";

const UseMemoPage = () => {
  const [change, setChange] = useState(false);
  const [changeEffect, setChangeEffect] = useState(false);

  const count = useMemo(() => {
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
  }, [change]);

  useEffect(() => {
    setInterval(() => setChangeEffect((curr) => !curr), 300);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <h1>{changeEffect.toString()}</h1>
      <button onClick={() => setChange((curr) => !curr)}>change</button>
    </div>
  );
};

export default UseMemoPage;
