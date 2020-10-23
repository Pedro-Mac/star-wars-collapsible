import React from 'react';
import './App.css';

import starWars from './data.json';

const App: React.FC = () => {
  const films = starWars.data.films;
  const planets = starWars.data.planets;
  return (
    <div className="App">

    </div>
  );
}

export default App;
