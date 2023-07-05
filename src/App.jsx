import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [numberOne, seteNumberOne] = useState(0);
  const [numberTwo, seteNumberTwo] = useState(0);
  const [result, seteResult] = useState(0);
  const [opertion, setOperation] = useState("Add")
  
  return (
   <div className='app'>
    <h1>Calculator in react</h1>
    <label>First number</label>
    <input 
    type='number'
    value={numberOne}
    onChange={(e) => seteNumberOne(e.target.value)}/>
    <label>Second number</label>
    <input 
    type='number'
    value={numberTwo}
    onChange={(e) => seteNumberTwo(e.target.value)}
    />

    <select>
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
