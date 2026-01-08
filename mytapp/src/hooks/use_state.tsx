import { useState } from "react";

const UseStatePage = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>useState Hook</h1>
      <p>Used to manage local component state.</p>

      <h3>Example xyz:</h3>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </>
  );
};

export default UseStatePage;
