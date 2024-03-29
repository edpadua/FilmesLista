# FilmesLista

<h1>
    <a href="https://filmes-lista.vercel.app/"><img src="/filmeslista/public/demonstracao.gif"></a>
</h1>

# Summary

- [About](#About)
- [Demo](#-demo)
- [Technologies](#technologies)
- [Setup](#setup)
- [License](#license)
- [Contact](#contact)
 
## About 

This project shows a list of movies with main information, poster, trailer, based on the keyword searched by the user. This list of movies is consumed from the TMDB REST API.

The purpose of this project is to put into practice some aspects of the React library, such as the use of hooks, componentization, react-router, in this case with the consumption of API RESP by the Axios tool.

- The Homepage show a list of the top movies from IMDB website.
- Through the search bar the user types the name of the movie, if it is found it shows the list of movies with this word in the title.
- When the user clicks on the poster image of a movie on the list, a page opens with the main information about the production and the respective trailer, if any.

### :desktop_computer: Desktop design

![image](https://user-images.githubusercontent.com/4975360/229848516-0ec7b066-cca3-4715-9996-bd28c4579372.png)


### :iphone: Tablets design

![image](https://user-images.githubusercontent.com/4975360/229848788-7b57ba57-6b17-426f-9241-523afe021510.png)

### :iphone: Mobile design

![Screenshot_20230404-174837 (1)](https://user-images.githubusercontent.com/4975360/229919018-4d7101ac-0bed-4dba-bc93-50aa2e36dc05.png)


### [🌐 Demo](https://filmes-lista.vercel.app/)

### Technologies

- [ReactJS](https://reactjs.org)
- [Vite](https://vitejs.dev/guide/)
- [Axios](https://github.com/axios/axios)
- [React-router](https://reactrouter.com/)

## Setup

```bash
git clone https://github.com/edpadua/FilmesLista

cd filmeslista
npm i
npm run dev
```

## [🚀 TMDB Api](https://developers.themoviedb.org)

Get the key value api_key from the website.

VITE_API_KEY=api_key=
VITE_API=https://api.themoviedb.org/3/movie/
VITE_SEARCH=https://api.themoviedb.org/3/search/movie
VITE_PEOPLESEARCH=https://api.themoviedb.org/3/search/person
VITE_MULTSEARCH=https://api.themoviedb.org/3/search/multi
VITE_IMG=https://image.tmdb.org/t/p/w500/


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


## Contact

Eduardo de Pádua: ed.padua@gmail.com

Project Link: [https://github.com/edpadua/FilmesLista/](https://github.com/edpadua/FilmesLista)

