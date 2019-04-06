import React, { Component } from 'react';
import { connect } from 'react-redux';

// import MovieItem from '../../components/MovieItem';
import MoviesList from '../../components/MoviesList';

import { Layout, MovieList, LayoutContainer, Message } from '../../elements';

class Favorite extends Component {

  render() {
    const { favorites, totalFavoritos } = this.props;

    return (
      <Layout>
        {
          totalFavoritos > 0
            ? <LayoutContainer>
              <MoviesList movies={favorites} total={totalFavoritos} />
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
