import React from 'react'

import { useEffect, useState } from "react";

import FilmeCard from '../../Componentes/FilmeCard';

import './Inicio.css'

const URL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Inicio() {

    const [topFilmes, setTopFilmes] = useState([]);

    const getTopFilmes = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopFilmes(data.results);
        console.log("top filmes", data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${URL}top_rated?${apiKey}`;
        console.log(topRatedUrl);
        getTopFilmes(topRatedUrl);
    }, []);

    return (
        <div className="container">

            <div className="filmes-container">
                <div className='secao-titulo'>
                    <h2 className="titulo">Melhores filmes</h2>
                </div>


                <div className='filmes-cards'>
                    {topFilmes.length > 0 &&
                        topFilmes.map((filme) => <FilmeCard key={filme.id} filme={filme} />)}
                </div>


            </div>
        </div>
    )
}

export default Inicio
