import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [numberOne, seteNumberOne] = useState(0);
  const [numberTwo, seteNumberTwo] = useState(0);
  const [result, seteResult] = useState(0);
  const [opertion, setOperation] = useState("Add");

  const calculate = () => {
    if (opertion == "Add")
      return parseInt(numberOne) + parseInt(numberTwo);
    else if (opertion == "Multiply")
      return parseInt(numberOne) * parseInt(numberTwo);
    else if (opertion == "Subtract")
      return parseInt(numberOne) - parseInt(numberTwo);
    else {
      return parseInt(numberOne) / parseInt(numberTwo);
    }
  }

  return (
    <div className='app'>
      <h1>Calculator in react</h1>
      <label>First number</label>
      <input
        type='number'
        value={numberOne}
        onChange={(e) => seteNumberOne(e.target.value)} />
      <label>Second number</label>
      <input
        type='number'
        value={numberTwo}
        onChange={(e) => seteNumberTwo(e.target.value)}
      />

      <select onChange={(e) => seteResult(e.target.value)}>
        <option>Add</option>
        <option>Multiply</option>
        <option>Subtract</option>
        <option>To divide</option>
      </select>

      <label>Rusult:{result}</label>
    </div>
  )
}

export default App
