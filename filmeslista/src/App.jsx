import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import BarraDeNavegacao from './Componentes/BarraDeNavegacao'
import Rodape from './Componentes/Rodape'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
        <BarraDeNavegacao/>
        <Outlet/>
        <Rodape/>
    </div>
  )
}

export default App
