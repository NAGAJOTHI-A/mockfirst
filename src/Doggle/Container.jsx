import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Container = () => {

    let {dark,light}=useContext(ThemeContext)
    let [state,setState]=useState(true)
    let [text,setText]=useState("Happy Morning")

    let handleTheme=()=>{
        let box=document.getElementById("box");
        setState(!state)
        
        if(state == true){
          box.style.backgroundColor=dark.backgroundColor
          setText("Good Night")
        }
        else{
          box.style.backgroundColor=light.backgroundColor
          setText("Happy Morning")
        }
        console.log(text);
        
    }
    return <div>
        <div id='box'>
                <h1 style={{color: state ?"#eee844" :"whitesmoke"}}>{text}</h1>
                <button style={{color: state ?"whitesmoke" :"#eee844",
                  backgroundColor: state ? "#9fdbe9": "#404040"
                }} onClick={handleTheme}>{state? <FaMoon />:(<FaSun />)}</button>
        </div>
        
    </div>
}

export default Container