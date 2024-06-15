/* eslint-disable prefer-const */
import { useState } from 'react';
import './App.css'
import BarColor from './BarColor';

function App() {
  let [color, setColor] = useState("black")
  return (
    <>
      <div id="main" className='h-screen w-screen flex justify-center items-end ' style={{backgroundColor:color}}>
        <BarColor  setColor={setColor}/>
      </div>
    </>
  )
}

export default App
