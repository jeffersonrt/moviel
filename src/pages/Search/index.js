import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { StageSpinner } from "react-spinners-kit";


import SearchBar from '../../components/SearchBar';
import Paginate from '../../components/Paginate';
import MovieItem from '../../components/MovieItem';


import {
  Layout,
  LayoutContainer,
  MovieList,
  Loader
} from '../../elements';


class Search extends Component {

  render() {

    const { list, resultTotal, pageCurrent, isLoading } = this.props.store.moviesearchstore;
    const { addFavorite, isFavorite } = this.props.store.favoritesstore;

    return (
      <Layout>

        <SearchBar />
        {
          !isLoading
          && <LayoutContainer>
            <MovieList>
              {list.map((movie) => (
                <MovieItem
                  key={movie["imdbID"]}
                  imdbID={movie["imdbID"]}
                  type={movie["Type"]}
                  title={movie["Title"]}
                  year={movie["Year"]}
                  poster={movie["Poster"]}
                  favorite={isFavorite(movie)}
                  addFavorite={() => { addFavorite(movie) }}
                />
              )
              )}
            </MovieList>
          </LayoutContainer>
        }
        <Loader>
          <StageSpinner size={30} color="#686769" loading={isLoading} />
        </Loader>

        {
          !isLoading
          && <Paginate
            total={resultTotal}
            limit={10}
            pageCount={5}
            currentPage={pageCurrent} />
        }


      </Layout>
    );
  }

}

// export default Search;
export default inject('store')(observer(Search));


