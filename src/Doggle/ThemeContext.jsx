import React, { useContext } from 'react'
import { createContext } from 'react'

export let ThemeContext =createContext()

let themes={
    dark:{
        backgroundColor:"#404040 "
    },
    light:{
        backgroundColor:"#eee844"
    }
}

export default themes;