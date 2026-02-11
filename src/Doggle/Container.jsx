import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Container = () => {

    let {dark,light}=useContext(ThemeContext)
    let [state,setState]=useState(true)

    let handleTheme=()=>{
        let box=document.getElementById("box");
        setState(!state)
        if(state == true){
          box.style.backgroundColor=dark.backgroundColor
        }
        else{
          box.style.backgroundColor=light.backgroundColor
        }
    }
    return <div>
        <div id='box'>
              
        </div>
        <button onClick={handleTheme}>{state? <FaMoon />:(<FaSun />)}</button>
    </div>
}

export default Container