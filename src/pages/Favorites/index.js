import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieItem from '../../components/MovieItem';
import Paginate from '../../components/Paginate';

import { Layout, MovieList, LayoutContainer, Message } from '../../elements';

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

    // // console.log(favoritePaginate.length);
    // if (page > 1 && favoritePaginate.length === 0 ){
    //   // this.handlePageChange(page-1);
    //   let start = (page - 2) * 10;
    //   let end = start + 10;
    //   let favoritePaginate = favorites.slice(start, end);
    // }

    return (
      <div>
        {favoritePaginate.map((movie) => (
          <MovieItem key={movie['imdbID']} movie={movie} />
        ))}
        {this.pagination()}
      </div>
    );

  }

  render() {
    const { totalFavoritos } = this.props;

    return (
      <Layout>
        {
          totalFavoritos > 0
            ? <LayoutContainer>
              {this.renderMoviesList()}
            </LayoutContainer>
            : <Message>You don't have any favorite movie yet.</Message>
        }
      </Layout>
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
