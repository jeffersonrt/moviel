import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { StageSpinner } from "react-spinners-kit";

import SearchBar from '../../components/SearchBar';

import MoviesList from '../../components/MoviesList';


import {
  Layout,
  LayoutContainer,
  MovieList,
  // Loader
} from '../../elements';


class Search extends Component {

  render() {
    const { searchResult, totalSearch } = this.props;
    return (
      <Layout>
        <SearchBar />
        <LayoutContainer>
          <MoviesList movies={searchResult} total={totalSearch} />
        </LayoutContainer>
      </Layout>
    );
  }

}

const mapStateToProps = (state) => {
  return ({
    searchResult: state.movies.search || [],
    totalSearch: state.movies.totalResults
  })
};

export default connect(mapStateToProps)(Search);





{/* {
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
        } */}
