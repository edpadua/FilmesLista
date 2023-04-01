import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import React from 'react'

import "./Filme.css";

import axios from 'axios';

import Youtube from 'react-youtube';

import FilmeCard from '../../Componentes/FilmeCard';

const URL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Filme() {

    const { id } = useParams();
    const [filme, setFilme] = useState(null);



    const getFilme = async (url) => {
        const res = await axios.get(url);
        console.log("res", res);
        setFilme(res.data);
    };

    useEffect(() => {
        const url = `${URL}${id}?${apiKey}&append_to_response=videos`;
        getFilme(url);
    }, []);


    return (
        <div div className="container">
            <div className="filmes-container">
                {console.log("filme ojbect", filme)}
             
                {filme && (

                    <>
                        <div class="secao-titulo"></div>
                        <div className="filme-detalhes">
                            <FilmeCard filme={filme} mostraLink={false} />
                            <div className="filme-info">
                                <div className="info-item">
                                    <p className="tagline">"{filme.tagline}"</p>
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

                                {filme.videos.results[0] && 
                                <Youtube
                                    videoId={filme.videos.results[0].key}

                                    opts={{
                                        width: '100%',
                                        playerVars: {
                                            autoplay: 1,
                                            controls: 0,
                                            cc_load_policy: 0,
                                            fs: 0,
                                            iv_load_policy: 0,
                                            modestbranding: 0,
                                            rel: 0,
                                            showinfo: 0,
                                        },
                                    }}
                                />}
                            </div>




                        </div>

                    </>
                )}
            </div>
        </div>
    )
}

export default Filme
