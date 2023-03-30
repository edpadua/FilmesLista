import React from 'react'

import { Link, Outlet } from 'react-router-dom'

import { FaSearch } from 'react-icons/fa';

import './BarraDeNavegacao.css'

function BarraDeNavegacao() {
    return (
        <>
            <header className='header-filmes'>
                <nav className="navbar">
                    <div className="navbar-container">
                        <h2>
                            <Link to="/">Lista de Filmes</Link>
                        </h2>
                        <form>
                            <input type="text" placeholder='Digite o nome do filme'></input>
                            <button className="botao" type='submit'>Buscar</button>
                        </form>
                    </div>
                </nav>
            </header>


        </>
    )
}

export default BarraDeNavegacao
