import React from 'react'
import './FilmeCard.css'

import { Link } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';

const imagesURL = import.meta.env.VITE_IMG;

function FilmeCard({ filme, mostraLink = true }) {
  return (
    <div className="filme-card">
      <img src={imagesURL + filme.poster_path} alt={filme.title} />
      <h2>{filme.title}</h2>
      <p>
        <FaStar /> {filme.vote_average}
      </p>
      {mostraLink && <Link to={`/filme/${filme.id}`}>Detalhes</Link>}
    </div>
  )
}

export default FilmeCard
