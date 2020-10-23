import React, {useState} from 'react'

//Components
import MovieTitle from './../MovieTitle'
import PlanetsList from './../PlanetsList'

//Styles
import './MovieContainer.scss'

interface MovieProps {
  movieTitle: string;
}

const MovieContainer: React.FC<MovieProps> = props => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleMovieToggle = (): void => {
    setIsActive(previousState => previousState = !previousState);
  }

  return (
    <div className="movie-container" onClick={handleMovieToggle}>
      <div className="movie-title">
        <MovieTitle>{props.movieTitle}</MovieTitle>
        {(!isActive && <img src="./assets/ARROW_OPEN.svg" alt="Toggle open"/>) || <img src="./assets/ARROW_CLOSE.svg" alt="Toggle close"/>}
      </div>
      {isActive && <PlanetsList />}
    </div>
  )
}

export default MovieContainer;
