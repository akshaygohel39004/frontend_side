import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "./app/store"
import { increment, decrement } from "./features/counter/counterSlice"

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default App
