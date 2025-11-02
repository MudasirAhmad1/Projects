import React from 'react'
import Example from './Example'

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
    <div style={{display:'flex', justifyContent:'center', padding:'200px'}}>
      <Example user="Muzamil"/>
      <Example user="Mudasir"/>
      <Example user="Aabid"/>
    </div>
  )
}

export default App