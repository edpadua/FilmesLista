import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import FilmeCard from "../../Componentes/FilmeCard";

const URL = import.meta.env.VITE_SEARCH;
const personURL = import.meta.env.VITE_PEOPLESEARCH;
const multiURL = import.meta.env.VITE_MULTSEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import React from 'react'

function Busca() {

    const [params] = useSearchParams();

    const [filmes, setFilmes] = useState([]);
    const query = params.get("q");

    const getBusca = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setFilmes(data.results);
      };

      useEffect(() => {
        console.log("apikey",apiKey);
        const buscaURL = `${URL}?${apiKey}&query=${query}`;
        getBusca(buscaURL);
      }, [query]);
    

  return (
    <div className="container">

            <div className="filmes-container">
                <div className='secao-titulo'>
                    
                </div>


                <div className='filmes-cards'>
                    {filmes.length > 0 &&
                        filmes.map((filme) => <FilmeCard key={filme.id} filme={filme} />)}
                </div>


            </div>
        </div>
  )
}

export default Busca
