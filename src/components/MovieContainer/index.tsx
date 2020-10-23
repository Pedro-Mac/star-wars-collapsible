import React, {useState} from 'react'
import MovieTitle from './../MovieTitle'

//Styles
import './MovieContainer.scss'

interface MovieProps {
  movieTitle: string;
}

const MovieContainer: React.FC<MovieProps> = props => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleMovieToggle = () => {
    setIsActive(previousState => previousState = !previousState);
  }

  return (
    <div className="movie-container" onClick={handleMovieToggle}>
      <MovieTitle>{props.movieTitle}</MovieTitle>
      {(!isActive && <img src="./assets/ARROW_OPEN.svg" alt="Toggle open"/>) || <img src="./assets/ARROW_CLOSE.svg" alt="Toggle close"/>}
      
    </div>
  )
}

export default MovieContainer;
