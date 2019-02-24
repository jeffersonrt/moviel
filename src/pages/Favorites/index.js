import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

import MovieItem from '../../components/MovieItem';


import { Layout, MovieList, LayoutContainer, Message } from '../../elements';

class Favorite extends Component {

  render() {

    const {
      movies,
      addFavorite,
      isFavorite
    } = this.props.store.favoritesstore;

    return (
      <Layout>

        {
          movies.length > 0
            ? <LayoutContainer>
              <MovieList>
                {movies.map(
                  movie => (<MovieItem
                    key={movie["imdbID"]}
                    imdbID={movie["imdbID"]}
                    type={movie["Type"]}
                    title={movie["Title"]}
                    year={movie["Year"]}
                    poster={movie["Poster"]}
                    favorite={isFavorite(movie)}
                    addFavorite={() => { addFavorite(movie) }}
                  />)

                )}
              </MovieList>
            </LayoutContainer>
            : <Message>You don't have any favorite movie yet.</Message>
        }


      </Layout>
    );
  }

}

export default inject('store')(observer(Favorite));
