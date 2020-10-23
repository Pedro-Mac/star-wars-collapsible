import React from 'react'
import MovieTitle from './../MovieTitle'

//Styles
import './MovieContainer.scss'

interface MovieProps {
  movieTitle: string;
}

const MovieContainer: React.FC<MovieProps> = props => {
  return (
    <div className="movie-container">
      <MovieTitle>{props.movieTitle}</MovieTitle>
      <img src="./assets/ARROW_OPEN.svg" alt="Open planet details"/>
    </div>
  )
}

export default MovieContainer;
