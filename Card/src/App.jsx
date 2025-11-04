import React from 'react'
import Example from './Example'
import Home from './Home'
import Color from './Color'

function App() {
  const user=[
    {
      name:"Mudasir"
    },
    {
      name:"AAbid",
    },
    {
      name:"Google"
    }
  ]
  return (
    // <div style={{display:'flex', justifyContent:'center', padding:'200px'}}>
    //   <Example user="Muzamil"/>
    //   <Example user="Mudasir"/>
    //   <Example user="Aabid"/>
      
    // </div>
    // <Home/>
    <Color/>
  )
}

export default App