# FilmesLista

<h1>
    <a href="https://filmes-lista.vercel.app/"><img src="/filmeslista/public/demonstracao.gif"></a>
</h1>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About</a>
      <ul>
        <li><a href="#Demo">Demo</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#setup">Setup</a>
      
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
   
  </ol>
</details>
 
## About 

This project shows a list of movies with main information, poster, trailer, based on the keyword searched by the user. This list of movies is consumed from the TMDB REST API.

The purpose of this project is to put into practice some aspects of the React library, such as the use of hooks, componentization, react-router, in this case with the consumption of API RESP by the Axios tool.

- The Homepage show a list of the top movies from IMDB website.
- Through the search bar the user types the name of the movie, if it is found it shows the list of movies with this word in the title.
- When the user clicks on the poster image of a movie on the list, a page opens with the main information about the production and the respective trailer, if any.

### [🌐 Demo](https://filmes-lista.vercel.app/)



### [🚀 TMDB Api](https://developers.themoviedb.org)

Get the key value api_key from the website.

VITE_API_KEY=api_key=
VITE_API=https://api.themoviedb.org/3/movie/
VITE_SEARCH=https://api.themoviedb.org/3/search/movie
VITE_PEOPLESEARCH=https://api.themoviedb.org/3/search/person
VITE_MULTSEARCH=https://api.themoviedb.org/3/search/multi
VITE_IMG=https://image.tmdb.org/t/p/w500/

