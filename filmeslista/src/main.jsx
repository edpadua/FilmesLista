import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App'
import Inicio from './Paginas/Inicio';
import Filme from './Paginas/Filme';
import Busca from './Paginas/Busca';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Inicio />} />
          <Route path="filme/:id" element={<Filme />} />
          <Route path="busca" element={<Busca />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
