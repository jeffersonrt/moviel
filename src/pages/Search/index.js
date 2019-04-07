import React, { Component } from 'react';
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
} from '../../elements';

class Search extends Component {

  // componentDidMount(){
  //   const { searchRequest } = this.props;
  //   searchRequest('star wars', 1);
  // }

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

  render() {
    const { isLoading, error, search } = this.props;
    return (
      <Page>
        <SearchBar />
        <Wrapper>
          {
            error
              ? <Error>{!isLoading && error.message}</Error>
              : this.renderMoviesList()
          }
          {/* {search.length === 0 && <Message>Start .</Message> } */}
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
