import { useEffect, useState } from "react";

/*
  CASE 1: Runs once (component mount)
  CASE 2: Runs when dependency changes
  CASE 3: Cleanup logic
 */

const UseEffectPage = () => {
  
  const [count, setCount] = useState<number>(0);

  
  const [seconds, setSeconds] = useState<number>(0);


  useEffect(() => {
    console.log("Case 1: Component mounted");

    return () => {
      console.log("Case 1: Component unmounted");
    };
  }, []);

 
  useEffect(() => {
    console.log("Case 2: Count changed to", count);
  }, [count]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Case 3: Interval cleared");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useEffect Hook – 3 Common Cases</h1>

      <section>
        <h2>Case 1: Run Once (Component Mount)</h2>
        <p>
          Runs only once when the component mounts.
          Check the console.
        </p>
      </section>

      <hr />

      <section>
        <h2>Case 2: Run When State Changes</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prev => prev + 1)}>
          Increment
        </button>
      </section>

      <hr />

      <section>
        <h2>Case 3: Cleanup Logic</h2>
        <p>Timer: {seconds} seconds</p>
        <p>
          Interval is cleared automatically when component unmounts.
        </p>
      </section>
    </div>
  );
};

export default UseEffectPage;
