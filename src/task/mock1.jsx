import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
  let [bg,setBg]=useState(" ");

  let handleClick=(e)=>{
   
   setBg(e.target.innerText)
   var div=document.getElementsByClassName('sec');
  }

  return (
    <div className='maincont'>
      <div className='first'>
        <div className='block1' onClick={handleClick}>
         Red
        </div>
        <div className='block2' onClick={handleClick}>
          Green
        </div>
        <div className='block3' onClick={handleClick}>
          Blue
        </div>
      </div>
      <div className='sec' style={{backgroundColor:`${bg}`}}>
          {bg}
</div>
      
    </div>
  )
}

export default App