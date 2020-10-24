import React, {useState} from 'react'

//Components
import MovieTitle from '../MovieTitle'
import PlanetsList from '../../PlanetsList'

//Styles
import './MovieContainer.scss'


interface MovieProps {
  movie: {
    title: string;
    id: string;
  };

  handlePlanetsList: () => {
    id: string;
    name: string;
    rotationPeriod: number | null;
    orbitalPeriod: number | null;
    diameter: number | null;
    climates: string[];
    surfaceWater: number | null;
    population: number | null;
    filmConnection: {
      films: {id: string}[]
    }
  }[]
}

const MovieContainer: React.FC<MovieProps> = props => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleMovieToggle = (): void => {
    setIsActive(previousState => previousState = !previousState);
  }

  return (
    <div className="movie-container" >
      <div className="movie-title" onClick={handleMovieToggle}>
        <MovieTitle>{props.movie.title}</MovieTitle>
        {(!isActive && <img src="./assets/ARROW_OPEN.svg" alt="Toggle open"/>) || <img src="./assets/ARROW_CLOSE.svg" alt="Toggle close"/>}
      </div>
      {isActive && <PlanetsList planetsList={props.handlePlanetsList()}/>}
    </div>
  )
}

export default MovieContainer;
