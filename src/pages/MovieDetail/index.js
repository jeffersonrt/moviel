import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { movieGet, addFavorite, removeFavorite } from '../../stores/actions';

import { StageSpinner } from "react-spinners-kit";
import { FaRegStar, FaStar } from 'react-icons/fa';
import {
  Page,
  Wrapper,
  ButtonFav,
} from '../../elements';
import {
  Aside,
  Column,
  MovieHeader,
  MovieTitle,
  IconFav,
  ColumnsContainer,
  Rating
} from './styles';

import noposter from '../../assets/moviel-poster.jpg';

class MovieDetail extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
    isFavorite: PropTypes.bool,
    addFavorite: PropTypes.func.isRequired,
    removeFavorite: PropTypes.func.isRequired,
    movieGet: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({ id: PropTypes.string }),
    }).isRequired,
  }
  

  static defaultProps = {
    movie: {}
  }

  componentDidMount() {
    const { movieGet, match } = this.props;
    movieGet(match.params.id);
  }

  render() {
    const { movie, isLoading, isFavorite, addFavorite, removeFavorite } = this.props;
    const buttonAction = isFavorite ? removeFavorite : addFavorite;
    const poster = movie['Poster'] === 'N/A' ? noposter : movie['Poster'];
    const star = isFavorite ? <FaStar /> : <FaRegStar />

    return (
      <Page>
        <Wrapper>
          {!isLoading &&
            <ColumnsContainer>
              <Aside>
                <img src={poster} alt={`${movie['Title']} - ${movie['Year']}`} />
                <p><strong>Year:</strong> {movie['Year']}</p>
                <p><strong>Genre:</strong> {movie['Genre']}</p>
                <p><strong>Runtime:</strong> {movie['Runtime']}</p>
                <p><strong>Director:</strong> {movie['Director']}</p>
                <p><strong>Country:</strong> {movie['Country']}</p>
                <p><strong>Language:</strong> {movie['Language']}</p>
              </Aside>

              <Column>
                <MovieHeader>
                  <MovieTitle>{movie['Title']}</MovieTitle>
                  <Rating><p><strong>{movie['imdbRating']}</strong></p></Rating>
                  <ButtonFav size={30} onClick={() => buttonAction(movie)}><IconFav>{star}</IconFav></ButtonFav>
                </MovieHeader>
                <p>{movie['Plot']}</p>
                <p><strong>Writer:</strong> {movie['Writer']}</p>
                <p><strong>Actors:</strong> {movie['Actors']}</p>
              </Column>
            </ColumnsContainer>
          }
          <StageSpinner size={30} color="#686769" loading={isLoading} />
        </Wrapper>

      </Page>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.movieDetail.loading,
  movie: state.movieDetail.movie || {},
  error: state.movieDetail.error,
  isFavorite: state.favorites.findIndex(favorite => favorite['imdbID'] === ownProps.match.params.id) >= 0
});


export default connect(mapStateToProps, { movieGet, addFavorite, removeFavorite })(MovieDetail);
