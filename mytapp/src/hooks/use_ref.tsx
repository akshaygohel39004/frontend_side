import { useEffect, useRef, useState } from "react";


//example one
const BrokenExample = () => {
  const valueRef = useRef(0);
  const [value, setValue] = useState(0);
  return (
    <>
      <p>Value: {valueRef.current}</p>
      <button onClick={() => valueRef.current += 1}>
        Increment
      </button>

      <button onClick={() => setValue(value+1)}>
        Render
      </button>
    </>
  );
};

//example two


const UseRefPage = () => {
  // I. Reference to DOM element
  const inputRef = useRef<HTMLInputElement | null>(null);

  // II. Mutable value that does not cause re-render
  const renderCount = useRef<number>(0);

  // III. Store previous state
  const previousCount = useRef<number | null>(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useRef Hook</h1>

      <div>
        <h2>I. DOM access</h2>
        <input ref={inputRef} placeholder="Focus input using ref" />
        <br />
        <button onClick={() => inputRef.current?.focus()}>
          Focus Input
        </button>
      </div>

      <hr />

      <div>
        <h2>II. Mutable value</h2>
        <p>Render count: {renderCount.current}</p>
        <p>This value updates without re-render.</p>
      </div>

      <hr />

      <div>
        <h2>III. Previous state</h2>
        <p>Current count: {count}</p>
        <p>Previous count: {previousCount.current}</p>
        <button onClick={() => setCount(c => c + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};

export { BrokenExample, UseRefPage };