import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import React from 'react'

import "./Filme.css";

import FilmeCard from '../../Componentes/FilmeCard';

const URL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Filme() {

    const { id } = useParams();
    const [filme, setFilme] = useState(null);

    const getFilme = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setFilme(data);
    };

    useEffect(() => {
        const url = `${URL}${id}?${apiKey}`;
        getFilme(url);
    }, []);


    return (
        <div div className="container">
            <div className="filmes-container">
                {console.log("filme", filme)}
                {filme && (

                    <>
                        <div class="secao-titulo"></div>
                        <div className="filme-detalhes">
                            <FilmeCard filme={filme} mostraLink={false} />
                            <div className="filme-info">
                                <div className="info-item">
                                    <p className="tagline">{filme.tagline}</p>
                                </div>
                                <div className="info-item">
                                    <p><strong>Duração:</strong> {filme.runtime} min</p>
                                </div>
                                <div className="info-item">
                                    <p><strong>Idioma original:</strong> {filme.original_language}</p>
                                </div>
                                <div className="info-item">
                                    <p><strong>Sinopse:</strong> {filme.overview}</p>
                                </div>
                            </div>




                        </div>

                    </>
                )}
            </div>
        </div>
    )
}

export default Filme
