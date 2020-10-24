import React from 'react';
//Styles
import './App.scss';

//Components
import MovieContainer  from './components/Movies/MovieContainer'

//JSON Data
import starWars from './data.json';




const App: React.FC = () => {
  const films = starWars.data.films;
  const planets = starWars.data.planets;

  const getPlanetsInMovie = (movie: {id: string, title: string}) => {
    const planetsList = [];

    for (let element of planets) {
      const filmsList = element.filmConnection.films
      for (let film of filmsList) {
        if (film.id === movie.id) planetsList.push(element);
      }
    }

    return planetsList;
  }


  return (
    <div className="App">
     <img src="./assets/LOGO.svg" alt="LOGO"/>
      {films.map(value => <MovieContainer key={value.id} movie={value} handlePlanetsList={() => getPlanetsInMovie(value)} />)}
    </div>
  );
}

export default App;
