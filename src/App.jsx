import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar'
import SkillsCaresoul from './components/SkillCaresoul/SkillsCaresoul'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <Navbar/>
    <Home className="home"></Home>
    </>
 )
}

export default App
