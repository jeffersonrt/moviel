import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

import {
  CustomLink,
  ButtonFav
} from '../../elements';

import {
  MovieCard
} from './styles';

import noposter from '../../assets/moviel-poster.jpg';

const MovieItem = ({ title, year, type, poster, imdbID, favorite, addFavorite }) => {
  const star = favorite ? <FaStar /> : <FaRegStar />
  const moviePoster = poster === 'N/A' ? noposter : poster;

  return (
    <MovieCard>
      <ButtonFav position="absolute" top={10} right={10} onClick={addFavorite}>{star}</ButtonFav>
      <CustomLink to={`movie/${imdbID}`}>
        <img src={moviePoster} alt={`Poster - ${title}`} />
        <span>{year}</span>
        <h2>{title}</h2>
      </CustomLink>
    </MovieCard>

  )
};

export default MovieItem;
