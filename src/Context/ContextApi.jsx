import React, { createContext } from 'react'

export let  ContextApi=createContext();

let RjajiNagar= ({children})=>{
    console.log(children)
    return <ContextApi.Provider value={{name:"dinga"}}>
       {children}
    </ContextApi.Provider>
}

export default RjajiNagar
