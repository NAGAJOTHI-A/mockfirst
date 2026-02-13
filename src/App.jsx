import React, { useState } from 'react'


const App = () => {
  let [state,setState]=useState({
          user:"",
          password:"",
          gender:"",
          degree:"",
          skills:[]
      })
 
     let handleChange=(e)=>{
      console.log(e)
      let  {name,value,type,checked}=e.target
      if(type === "checkbox"){
        if(checked){
          setState({...state,skills:[...state.skills,value]})
        }
        else{
           setState({...state,skills:state.skills.filter((val)=> val !== value)}) 
         }   
      }
      else{
      setState({...state,[name]:value}) 
      }
     }
 
     let handleSubmit=(x)=>{
        x.preventDefault()
        console.log({...state})
     }

  return (
    <div>
      <h3>Form Handling Using Hooks</h3>
      <form action="" onSubmit={handleSubmit}>
         <input type="text" name="user" onChange={handleChange}/> <br></br>
         <input type="password" name="password" onChange={handleChange}/> <br /> <br />
         <label>MALE</label>
         <input type="radio" name="gender" id="" value="MALE" onChange={handleChange}/> <br /><br />
         <label>FEMALE</label>
         <input type="radio" name="gender" id="" value="FEMALE" onChange={handleChange}/> <br /> <br />
         <select name='degree' onChange={handleChange}> <br /><br />
            <option value="">
              SELECT
              </option>
            <option value="be">
              B.E
              </option>
              <option value="bsc">
              B.Sc
              </option>
              <option value="bca">
              BCA
              </option>
            </select> <br /> <br />
             <input type="checkbox" name="skills" value="web"  id="" onChange={handleChange}/>
             <label htmlFor="">web</label>
             <input type="checkbox" name="skills"  value="sql" id="" onChange={handleChange}/>
             <label htmlFor="">sql</label>
             <input type="checkbox" name="skills"  value="java"  id="" onChange={handleChange}/>
             <label htmlFor="">java</label>
             <input type="checkbox" name="skills"  value="spring"  id="" onChange={handleChange}/>
             <label htmlFor="">spring</label>
             <input type="checkbox" name="skills"  value="react"  id="" onChange={handleChange}/>
              <label htmlFor="">react</label>
              <br /><br />
         <input type="submit" value="submit" />
          


        </form> 
    </div>
  )
}

export default App