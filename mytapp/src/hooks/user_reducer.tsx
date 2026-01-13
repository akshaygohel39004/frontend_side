import { useReducer } from "react";

type State = {
  count: number;
};


type Action =
  | { type: "increment" }
  | { type: "decrement" };

const initialState: State = {
  count: 0,
};


const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};


const UseReducerPage = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ padding: "20px" }}>
      <h1>useReducer Hook</h1>
      <p>
        useReducer is useful when state logic becomes complex
        or when next state depends on previous state.
      </p>

      <h2>Count: {state.count}</h2>

      <button
        onClick={() => dispatch({ type: "increment" })}
        style={{ marginRight: "10px" }}
      >
         Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
         Decrement
      </button>
    </div>
  );
};

export default UseReducerPage;
