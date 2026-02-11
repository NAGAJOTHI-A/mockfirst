import React from 'react'
import { ContextApi } from './ContextApi'

const Dingi = () => {
  return (
    <div>
        <ContextApi.Consumer>
           { (value)=>{
               console.log(value);
               
            }}
        </ContextApi.Consumer>
    </div>
  )
}

export default Dingi