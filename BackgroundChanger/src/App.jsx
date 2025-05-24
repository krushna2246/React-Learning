import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("black")
  return (
    <>
    <div className='bg' style={{backgroundColor:color}}>
      <div >
            <button 
            onClick={()=>{setColor("red")}}
            style={{backgroundColor:"red",padding:10,}}>Red</button>
            <button 
            onClick={()=>{setColor("blue")}}
            style={{backgroundColor:"blue",padding:10}}>Blue</button>
            <button 
            onClick={()=>{setColor("green")}}
            style={{backgroundColor:"green",padding:10}}>Green</button>
       </div>
    </div>
    
    </>
  )
}
export default App
