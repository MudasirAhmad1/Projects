import React, { useState } from 'react'

function Color() {
    const [color,setcolor]=useState('greenyellow')
    const data=(e)=>{
            setcolor(e.target.value);
            console.log(e.target.value);
    }
  return (
    <div style={{width:'1700px', height:'800px', backgroundColor:`${color}`}}>
        <h1>Color Change project:</h1>
        <button value='black' onClick={data}>BLack</button>
        <button value='red' onClick={data}>Red</button>
        <button value='green' onClick={data}>Green</button>
        <button value='blue' onClick={data} >Blue</button>
        <button value='white' onClick={data} >white</button>
        


    </div>
  )
}

export default Color