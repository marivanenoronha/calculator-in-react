import React from 'react';

import './App.css'

function App() {
  
  return (
   <div className='app'>
    <h1>Calculator in react</h1>
    <label>First number</label>
    <input type='number'/>
    <label>Second number</label>
    <input type='number'/>

    <select>
      <option>Add</option>
      <option>Multiply</option>
      <option>Subtract</option>
      <option>To divide</option>
    </select>

    <label>Rusult:</label>
   </div>
  )
}

export default App
