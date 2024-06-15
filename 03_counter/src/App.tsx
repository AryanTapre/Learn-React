/* eslint-disable prefer-const */


import { useState } from 'react';
import './App.css'

function App() {

  let [count, setCount] = useState(() => {
    return 0;
  })

  function handleClick() {
    setCount(count += 1);
  }
  
  function resetCounter() {
    setCount(0);
  }

  return (
    <>
      <h3>Current counter value : {count}</h3>
      <button id='button' onClick={handleClick}> add value</button> &nbsp;
      <button id='reset-button' onClick={resetCounter}> Reset value</button>
    </>
  )
}

export default App
