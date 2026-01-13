import { useMemo, useState } from "react";

const expensiveCalculation = (num: number) => {
  console.log("Expensive calculation running");
  let total = 0;

  for (let i = 0; i < 500_000_000; i++) {
    total += num;
  }

  return total;
};

const UseMemoPage = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useMemo is important because it prevents
  // expensiveCalculation from running on every render
  const memoizedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

//   const memoizedValue=expensiveCalculation(count);

  return (
    <div>
      <h2>useMemo example</h2>

      <p>Result: {memoizedValue}</p>

      <button onClick={() => setCount(c => c + 1)}>
        Increment count
      </button>

      <br />

      <input
        placeholder="Type here"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <p>Text: {text}</p>

      <p>
        Open console and type in input.
        Calculation does not run again.
      </p>
    </div>
  );
};

export default UseMemoPage;
