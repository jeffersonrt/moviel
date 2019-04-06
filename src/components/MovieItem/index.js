import React from 'react';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../stores/actions';

import { FaRegStar, FaStar } from 'react-icons/fa';

import {
  CustomLink,
  ButtonFav
} from '../../elements';

import {
  MovieCard
} from './styles';

import noposter from '../../assets/moviel-poster.jpg';

const MovieItem = ({ movie, isFavorite, addFavorite, removeFavorite }) => {

  const buttonAction = isFavorite ? removeFavorite : addFavorite;
  const star = isFavorite ? <FaStar /> : <FaRegStar />
  const moviePoster = movie['Poster'] === 'N/A' ? noposter : movie['Poster'];

  return (
    <MovieCard>
      <ButtonFav position="absolute" top={10} right={10} onClick={() => buttonAction(movie)}>{star}</ButtonFav>
      <CustomLink to={`movie/${movie['imdbID']}`}>
        <img src={moviePoster} alt={`Poster - ${movie['Title']}`} />
        <span>{movie['Year']}</span>
        <h2>{movie['Title']}</h2>
      </CustomLink>
    </MovieCard>

  )
};

const mapStateToProps = (state, ownProps) => ({
  isFavorite: state.favorites.findIndex(favorite => favorite['imdbID'] === ownProps.movie['imdbID']) >= 0
});

export default connect(mapStateToProps, { addFavorite, removeFavorite })(MovieItem);
