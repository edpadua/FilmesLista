import React from 'react'

import { useState } from "react";

import { Link, useNavigate } from 'react-router-dom'

import { FaSearch } from 'react-icons/fa';

import { FaFilm } from 'react-icons/fa';

import './BarraDeNavegacao.css'

function BarraDeNavegacao() {

    const [busca, setBusca] = useState("");
    const navegar = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!busca) return;
    
        navegar(`/busca?q=${busca}`, { replace: true });
        setBusca("");
        console.log("busca",busca);
      };

    return (
        <>
            <header className='header-filmes'>
                <nav className="navbar">
                    <div className="navbar-container">
                        
                            <Link to="/"><FaFilm style={{ fontSize: '30px'}}/></Link>
                       
                        <form onSubmit={handleSubmit}> 
                            <input className="form-control" type="text" placeholder='Digite o nome do filme'
                            value={busca} onChange={(e) => setBusca(e.target.value)}></input>
                            <button className="botao" type='submit'>Buscar</button>
                        </form>
                    </div>
                </nav>
            </header>


        </>
    )
}

export default BarraDeNavegacao
