import React, { useContext } from 'react'
import { ContextApi } from './ContextApi'

const Penga = () => {
    let value= useContext(ContextApi)
    console.log(value);
    
  return (
    <div>Penga</div>
  )
}

export default Penga