import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FaRegStar, FaStar } from 'react-icons/fa';

import { addFavorite, removeFavorite } from '../../stores/actions';

import {
  ButtonFav
} from '../../elements';

import {
  MovieCard,
  ImageContainer,
} from './styles';

import noposter from '../../assets/moviel-poster.jpg';

const MovieItem = ({ movie, isFavorite, addFavorite, removeFavorite }) => {

  const buttonAction = isFavorite ? removeFavorite : addFavorite;
  const star = isFavorite ? <FaStar /> : <FaRegStar />
  const moviePoster = movie['Poster'] === 'N/A' ? noposter : movie['Poster'];

  return (
    <MovieCard>
      <ButtonFav position="absolute" top={10} right={10} onClick={() => buttonAction(movie)}>{star}</ButtonFav>
      <NavLink to={`movie/${movie['imdbID']}`}>
        <ImageContainer>
          <img src={moviePoster} alt={`Poster - ${movie['Title']}`} />
        </ImageContainer>
        <span>{movie['Year']}</span>
        <h2>{movie['Title']}</h2>
      </NavLink>
    </MovieCard>
  )
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  isFavorite: state.favorites.findIndex(favorite => favorite['imdbID'] === ownProps.movie['imdbID']) >= 0
});

export default connect(mapStateToProps, { addFavorite, removeFavorite })(MovieItem);
