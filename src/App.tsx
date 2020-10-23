import React, {useState} from 'react';
//Styles
import './App.scss';

//Components
import MovieContainer  from './components/MovieContainer'

//JSON Data
import starWars from './data.json';


const App: React.FC = () => {
  const films = starWars.data.films;

  return (
    <div className="App">
     <img src="./assets/LOGO.svg" alt="LOGO"/>
      {films.map(value => <MovieContainer key={value.id} movieTitle={value.title}/>)}
    </div>
  );
}

export default App;
