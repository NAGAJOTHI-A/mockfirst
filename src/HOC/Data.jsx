import React from 'react'
import Hoc from './Hoc.jsx'

const Data = (props) => {
    console.log(props);
  return (
    <div> Data</div>
  )
}

export default Hoc(Data)