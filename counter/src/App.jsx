import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(3)
  const setdata=()=>{
    if (count>20) {
      return 
    }
    else
    {
      setCount(count+1);
    }
    
  }
  const set=()=>{
    if (count==0) {
      return 
    }
    else
    {
      setCount(count-1);
    }
  }

  return (
    <>
      <h1>Counter of Website =  {count} 
        <br />
        <br />
      <button onClick={setdata} >Click add = {count}</button>
      <button onClick={set} >Click add = {count}</button>
      </h1>
    </>
  )
}

export default App
