import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';

import { StageSpinner } from "react-spinners-kit";
import { FaRegStar, FaStar } from 'react-icons/fa';
import {
  Layout,
  LayoutContainer,
  ButtonFav,
  Loader
} from '../../elements';
import {
  Aside,
  Column,
  MovieHeader,
  MovieTitle,
  IconFav
} from './styles';
import noposter from '../../assets/moviel-poster.jpg';

class MovieDetail extends Component {

  componentDidMount() {
    const { getMovie } = this.props.store.moviedetailstore;
    const { params } = this.props.match;
    getMovie(params.id);
  }

  render() {
    const { movie, isLoading } = this.props.store.moviedetailstore;
    const { isFavorite, addFavorite } = this.props.store.favoritesstore;
    const poster = movie['Poster'] === 'N/A' ? noposter : movie['Poster'];
    const star = isFavorite(movie) ? <FaStar /> : <FaRegStar />

    return (
      <Layout>
        <LayoutContainer>
          {!isLoading &&
            <Fragment>
              <Aside>
                <img src={poster} alt={`${movie['Title']} - ${movie['Year']}`} />
                <p><strong>Rating:</strong> {movie['imdbRating']}</p>
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
                  <ButtonFav size={30} onClick={() => addFavorite(movie)}><IconFav>{star}</IconFav></ButtonFav>
                </MovieHeader>
                <p>{movie['Plot']}</p>
                <p><strong>Writer:</strong> {movie['Writer']}</p>
                <p><strong>Actors:</strong> {movie['Actors']}</p>
              </Column>
            </Fragment>
          }
        </LayoutContainer>
        <Loader>
          <StageSpinner size={30} color="#686769" loading={isLoading} />
        </Loader>
      </Layout>
    );
  }

}

export default inject('store')(observer(MovieDetail));
