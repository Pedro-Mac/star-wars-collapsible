import React, {useState} from 'react';
//Styles
import './App.scss';

//Components
import MovieContainer  from './components/MovieContainer'

//JSON Data
import starWars from './data.json';

//Models
import {ActiveFilms} from './models/activeFilms'

const App: React.FC = () => {
  const films = starWars.data.films;
  //const planets = starWars.data.planets;

  const [activeFilms, setActiveFilms] = useState<ActiveFilms[]>([]);

  return (
    <div className="App">
     <img src="./assets/LOGO.svg" alt="LOGO"/>
      {films.map(value => <MovieContainer key={value.id} movieTitle={value.title}/>)}
    </div>
  );
}

export default App;
