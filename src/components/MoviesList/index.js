import React from 'react';

// import { connect } from 'react-redux';

import MovieItem from '../MovieItem';
import Paginate from '../Paginate';

const MoviesList = ({ total, movies }) => {

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie['imdbID']} movie={movie} />
      ))}
      <Paginate
        total={total}
        limit={10}
        pageCount={5}
        currentPage={1} />
    </div>
  )

}

// const mapStateToProps = state => ({
//   searchResult: state.movies.search || [],
//   totalResults: state.movies.totalResults
// });


export default MoviesList;


