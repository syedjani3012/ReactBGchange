import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const body=document.getElementById("backg")


  let [col,setcol]=useState('white')

  const changecolor=(e)=>{
    const color=e.target.innerText
    setcol(color)
    
  }

  return (

    <div className="w-full h-screen duration-200" style={{backgroundColor: col}}>
      <h1 className='mb-11'>Background Changer</h1>
      <div>
        <button className="bg-blue-400 text-black rounded-xl" onClick={changecolor}>Blue</button>
        <button className="bg-red-400 text-black rounded-xl" onClick={changecolor}>Red</button>
        <button className="bg-green-400 text-black rounded-xl" onClick={changecolor}>Green</button>
      </div>
    </div>
  )
}

export default App
