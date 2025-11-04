import React, { useState } from 'react'

function Color() {
    const [color,setcolor]=useState('black')
  return (
    <div style={{width:'1700px', height:'400px', backgroundColor:`${color}`}}>
        <h1>Color Change project:</h1>
        <button onClick={(e)=>{
            e.target.value
        }}>Red</button>
        <button>Green</button>
        <button>Black</button>
    </div>
  )
}

export default Color