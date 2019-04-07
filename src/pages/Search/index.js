import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { StageSpinner } from "react-spinners-kit";

import { searchRequest } from '../../stores/actions';

import SearchBar from '../../components/SearchBar';
import Paginate from '../../components/Paginate';
import MovieItem from '../../components/MovieItem';

import {
  Page,
  Wrapper,
  MoviesList,
  Content,
  Error,
  Message
} from '../../styles/elements';

class Search extends Component {

  static propTypes = {
    term: PropTypes.string.isRequired,
    searchRequest: PropTypes.func.isRequired,
    search: PropTypes.arrayOf(PropTypes.object).isRequired,
    searchTotal: PropTypes.number,
    page: PropTypes.number,
    isLoading: PropTypes.bool,
    error: PropTypes.shape({
      message: PropTypes.string
    }),
  }

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
    if (!isLoading && search.length > 0) {
      return (
        <Content>
          <MoviesList>
            {search.map((movie) => (
              <MovieItem key={movie['imdbID']} movie={movie} />
            ))}
          </MoviesList>
          {this.pagination()}
        </Content>
      );
    }
  }

  showInitialMessage = () => {
    const { error, search, isLoading } = this.props;
    if (search.length === 0 && !error && !isLoading) {
      return <Message>Start you research on the search bar above! Enjoy :)</Message>
    }
  }

  showError = () => {
    const { isLoading, error } = this.props;
    if (!isLoading) {
      return <Error>{error.message}</Error>
    }
  }

  render() {
    const { isLoading, error } = this.props;
    return (
      <Page>
        <SearchBar />
        <Wrapper>
          {
            error
              ? this.showError()
              : this.renderMoviesList()
          }
          {this.showInitialMessage()}
          <StageSpinner size={30} color="#686769" loading={isLoading} />
        </Wrapper>
      </Page>
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
