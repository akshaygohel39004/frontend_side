import { useState } from 'react'
import './App.css'
import { Car } from './components/Car'
import AppRoutes from './routes'

function App() {
  const [count, setCount] = useState<number>(0)

  const [text, setText] = useState<string>("")

  function increament():void{
    setCount(count + 1)
  }

  // return (<>
  //       <h1>Hello, World!</h1>
  //       <Car make="Toyota" model="Corolla" year={2020} updatetext={setText} >/*here passes method setText*/  <h1>this is car</h1> </Car>
  //       <h3>{count}</h3>
  //       <button onClick={increament} >+</button>
  //       <button onClick={() => setCount((count) => count - 1)} >-</button>

  //       <h2>{text}</h2>

  //       </>)
  return (<AppRoutes />);
}

export default App
