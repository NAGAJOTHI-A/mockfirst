import React from 'react'
import { ContextApi } from './ContextApi'

const Dinga = () => {
    
    
  return (
    <div>
        <ContextApi.Consumer>
            {
                (value)=>{
                 console.log(value);
                 
                }
            }
        </ContextApi.Consumer>
    </div>
  )
}

export default Dinga