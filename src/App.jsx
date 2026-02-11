// import React from 'react'
// import RjajiNagar from './Context/ContextApi'
// import Dinga from './Context/Dinga'
// import Dingi from './Context/Dingi'
// import Penga from './Context/Penga'

// const App = () => {
//   return (
//     <div>
//       <RjajiNagar>
//           <Dinga></Dinga>
//           <Dingi></Dingi>
//           <Penga></Penga>
//       </RjajiNagar>
//     </div>
//   )
// }

// export default App

import React, { useContext } from 'react'
import themes, { ThemeContext } from './Doggle/ThemeContext'
import Container from './Doggle/Container'
import "./App.css"

const App = () => {
  return (
    <div>
      <div>
        
          <ThemeContext.Provider value={themes}>
              <Container></Container>
          </ThemeContext.Provider>
        
      </div>
      
    </div>
  )
}

export default App