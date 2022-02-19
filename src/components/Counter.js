import { useState } from "react";
import React from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const [taps, setTaps] = useState(0)
  const increment = ()=>{
    setCount(prevCount => prevCount + 1)
    setTaps(prevTaps => prevTaps + 1)
  }
  const decrement = () =>{
    if (count !==0){
      setCount(prevCount => 
         prevCount - 1 
      )
    }
    setTaps(prevTaps => prevTaps + 1)
  }
  const resetCount = () => setCount(0)
  const resetAll = () => {
    setCount(0)
    setTaps(0)
  }
  return (
    <div className="Counter-Container bg-secondary p-3 border border-info border border-3 rounded text-white-50">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <h2>Total Taps: {taps}</h2>
      <div className="button-container">
        <button onClick={increment} className="btn btn-primary btn-lg rounded-pill">Increment</button>
        <button onClick={decrement} className="btn btn-success btn-lg rounded-pill">Decrement</button>
      </div>
      <div className="button-container">
        <button onClick={resetCount} className="btn btn-outline-warning btn-lg rounded-pill">Reset Count</button>
        <button onClick={resetAll} className="btn btn-outline-danger btn-lg rounded-pill">Reset All</button>
      </div>
    </div>
  )
}
