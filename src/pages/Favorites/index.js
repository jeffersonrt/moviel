import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieItem from '../../components/MovieItem';
import Paginate from '../../components/Paginate';

import { 
  Page, 
  MoviesList, 
  Wrapper, 
  Content, 
  Message 
} from '../../elements';

class Favorite extends Component {

  state = {
    page: 1
  }

  handlePageChange = (page, e) => {
    this.setState({ page });
  };

  pagination = () => {
    const { totalFavoritos } = this.props;
    const { page } = this.state;
    if (totalFavoritos > 10) {
      return <Paginate total={totalFavoritos} currentPage={page} handlePageChange={this.handlePageChange} />;
    }
  };

  renderMoviesList = () => {
    const { favorites } = this.props;
    const { page } = this.state;
    const start = (page - 1) * 10;
    const end = start + 10;
    const favoritePaginate = favorites.slice(start, end);

    return (
      <Content>
        <MoviesList>
          {favoritePaginate.map((movie) => (
            <MovieItem key={movie['imdbID']} movie={movie} />
          ))}
        </MoviesList>
        {this.pagination()}
      </Content>
    );

  }

  render() {
    const { totalFavoritos } = this.props;
    return (
      <Page>
        <Wrapper>
          {
            totalFavoritos > 0
              ? this.renderMoviesList()
              : <Message>You don't have any favorite movie yet.</Message>
          }
        </Wrapper>
      </Page>
    );
  }

}

const mapStateToProps = (state) => {
  return ({
    favorites: state.favorites || [],
    totalFavoritos: state.favorites.length
  })
};

export default connect(mapStateToProps)(Favorite);
