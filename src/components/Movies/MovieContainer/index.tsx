import React, { useState } from 'react';

//Components
import MovieTitle from '../MovieTitle';
import PlanetsList from '../../PlanetsList';

//Styles
import './MovieContainer.scss';

//Models
import { MovieProps } from './models/MovieProps';

const MovieContainer: React.FC<MovieProps> = props => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleMovieToggle = (): void => {
    setIsActive(previousState => (previousState = !previousState));
  };

  return (
    <div className="movie-container">
      <div className="movie-title" onClick={handleMovieToggle}>
        <MovieTitle>{props.movie.title}</MovieTitle>
        {(!isActive && (
          <img src="./assets/ARROW_OPEN.svg" alt="Toggle open" />
        )) || <img src="./assets/ARROW_CLOSE.svg" alt="Toggle close" />}
      </div>
      {isActive && <PlanetsList planetsList={props.handlePlanetsList()} />}
    </div>
  );
};

export default MovieContainer;
