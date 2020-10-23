import React from 'react';
import './App.scss';
import MovieTitle from './components/MovieTitle'

import starWars from './data.json';

const App: React.FC = () => {
  const films = starWars.data.films;
  const planets = starWars.data.planets;

  return (
    <div className="App">
     <img src="./assets/LOGO.svg" alt="LOGO"/>
      {films.map(value => <MovieTitle>{value.title}</MovieTitle>)}
    </div>
  );
}

export default App;
