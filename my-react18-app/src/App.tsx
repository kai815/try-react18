import { useState } from 'react'
import './App.css'
import {FoodLists} from "./components/FoodLists";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FoodLists/>
    </div>
  )
}

export default App
