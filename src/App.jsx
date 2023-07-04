import React from 'react';

import './App.css'

function App() {
  
  return (
   <div>
    <h1>Calculator-in-react</h1>
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

    <labe>Rusult</labe>
   </div>
  )
}

export default App
