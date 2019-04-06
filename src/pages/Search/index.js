import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StageSpinner } from "react-spinners-kit";

import { searchRequest } from '../../stores/actions';

import SearchBar from '../../components/SearchBar';
import Paginate from '../../components/Paginate';
import MovieItem from '../../components/MovieItem';

import {
  Layout,
  LayoutContainer,
  // MovieList,
  // Loader
} from '../../elements';

class Search extends Component {

  handlePageChange = (page, e) => {
    e.preventDefault();
    const { term, searchRequest } = this.props;
    searchRequest(term, page);
  };

  pagination = () => {
    const { searchTotal, page } = this.props;
    if (searchTotal > 10) {
      return <Paginate total={searchTotal} currentPage={page} handlePageChange={this.handlePageChange} />;
    }
  };

  renderMoviesList = () => {
    const { search, isLoading } = this.props;
    if (!isLoading) {
      return (
        <div>
          {search.map((movie) => (
            <MovieItem key={movie['imdbID']} movie={movie} />
          ))}
          {this.pagination()}
        </div>
      );
    }
  }

  render() {
    const { isLoading, error } = this.props;
    return (
      <Layout>
        <SearchBar />
        <LayoutContainer>
          {
            error
              ? <p>{error.message}</p>
              : this.renderMoviesList()
          }
          <StageSpinner size={30} color="#686769" loading={isLoading} />
        </LayoutContainer>
      </Layout>
    );
  }

}

const mapStateToProps = (state) => {
  return ({
    search: state.search.data || [],
    searchTotal: state.search.totalResults,
    page: state.search.currentPage,
    isLoading: state.search.loading,
    error: state.search.error,
    term: state.search.term
  })
};

export default connect(mapStateToProps, { searchRequest })(Search);
