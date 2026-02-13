import React, { useState } from 'react'

const form= () => {
    let [state,setState]=useState({
        user:"",
        password:"",
        
    })

    let handleChange=(e)=>{
     let  {name,value}=e.target
     console.log(name)
     console.log(value)
     setState({...state,[name]:value})
    }

    let handleSubmit=(x)=>{
       x.preventDefault()
       console.log({...state})
    }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
         <input type="text" name="user" onChange={handleChange}/>
         <input type="password" name="password" onChange={handleChange}/>
         <input type="submit" value="submit" />

        </form> 
    </div>
  )
}

export default form