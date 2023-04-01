import React from 'react'

import { FaFilm } from 'react-icons/fa';

import { Link } from 'react-router-dom';

import './Rodape.css'

function Rodape() {
  return (
    <footer>
        <div className='logo-rodape'>
          <Link to="/"><FaFilm style={{ fontSize: '60px', color:'#ffffff'}}/></Link>
          <p className='texto-todape'>IMEDUB</p>
        </div>
    </footer>
  )
}

export default Rodape
