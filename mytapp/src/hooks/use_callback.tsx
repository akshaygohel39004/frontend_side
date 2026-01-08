import { useCallback, useState } from "react";
import React from "react";

type ChildProps = {
  onClick: () => void;
};

const Child = React.memo(({ onClick }: ChildProps) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Child button</button>;
});

const UseCallbackPage = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useCallback is important because it keeps
  // the same function reference between renders
  const handleClick = useCallback(() => {
    console.log("Child button clicked");
  }, []);


  //without useCallback
//   const handleClick=() => {
//     console.log("Child button clicked");
//   }

  return (
    <div>
      <h2>useCallback example</h2>

      <Child onClick={handleClick} />

      <button onClick={() => setCount(c => c + 1)}>
        Increment count: {count}
      </button>

      <br />

      <input
        placeholder="Type here"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <p>
        Open console and type in input.
        Child does not re-render.
      </p>
    </div>
  );
};

export default UseCallbackPage;
