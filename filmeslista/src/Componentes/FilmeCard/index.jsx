import React from 'react'
import './FilmeCard.css'

import { Link } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';

const imagesURL = import.meta.env.VITE_IMG;

function FilmeCard({ filme, mostraLink = true }) {
  if( imagesURL + filme.poster_path !="https://image.tmdb.org/t/p/w500/null")
  return (
   
    <div className="filme-card">
        {console.log("filme",filme)}
      
      
      {mostraLink ? <a href={`/filme/${filme.id}`}><img src={imagesURL + filme.poster_path} alt={filme.title} /></a>:
         (<img className="imagem-sem-hover" src={imagesURL + filme.poster_path} alt={filme.title} />)}
      <h2>{filme.title}</h2>
      <p>
        <FaStar /> {filme.vote_average}
      </p>
      
    </div>
  )
}

export default FilmeCard
