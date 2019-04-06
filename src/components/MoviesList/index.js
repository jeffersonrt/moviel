import React from 'react';
import MovieItem from '../MovieItem';
import Paginate from '../Paginate';

const MoviesList = ({ total, movies, page = 1 }) => {

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie['imdbID']} movie={movie} />
      ))}
      <Paginate
        total={total}
        currentPage={page} />
    </div>
  )

}

export default MoviesList;


