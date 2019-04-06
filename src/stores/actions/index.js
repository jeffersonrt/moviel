import api from '../../services/api';
import { unique } from '../../utils';

export const searchMovies = (term) => async dispatch => {

  const response = await api.get('', {
    params: {
      s: term,
      page: 1
    }
  });

  const movies = unique(response.data.Search, 'imdbID');
  dispatch({ type: 'movies/SEARCH', payload: { search: movies, totalResults: response.data.totalResults } });
}


export const getMovie = (id) => async dispatch => {
  const response = await api.get('', {
    params: {
      i: id
    }
  });
  dispatch({ type: 'movies/GET', payload: response.data });
}


export const addFavorite = movie => ({
  type: 'favorites/ADD',
  payload: movie
});

export const removeFavorite = movie => ({
  type: 'favorites/REMOVE',
  payload: movie
});

