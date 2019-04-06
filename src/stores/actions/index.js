import api from '../../services/api';
import { unique } from '../../utils';


// SEARCH ACTIONS

const searchSuccess = (result) => ({
  type: 'search/SUCCESS',
  payload: {
    data: result.data,
    totalResults: result.totalResults,
    currentPage: result.currentPage
  }
});

const searchFailure = error => ({
  type: 'search/FAILURE',
  payload: {
    error
  }
});

export const searchRequest = (term, page = 1) => async dispatch => {
  dispatch({ type: 'search/REQUEST', payload: { term } });

  try {
    const response = await api.get('', {
      params: {
        s: term,
        page
      }
    });

    if (response.data.Response === "False") {
      throw new Error(response.data.Error);
    }

    const movies = await unique(response.data.Search, 'imdbID');
    dispatch(searchSuccess({
      data: movies,
      totalResults: parseInt(response.data.totalResults),
      currentPage: page,
    }));

  } catch (error) {
    dispatch(searchFailure(error));
  }
}


// MOVIE DETAIL ACTIONS

const movieSuccess = (movie) => ({
  type: 'movie/SUCCESS',
  payload: { movie }
});

const movieFailure = (error) => ({
  type: 'movie/FAILURE',
  payload: { error }
});


export const movieGet = (id) => async dispatch => {
  dispatch({ type: 'movie/GET' });

  try {
    const response = await api.get('', {
      params: {
        i: id
      }
    });
    dispatch(movieSuccess(response.data));
  } catch (error) {
    dispatch(movieFailure('This movie is not available now, try again later.'));
  }
}

// FAVORITES ACTIONS

export const addFavorite = movie => ({
  type: 'favorites/ADD',
  payload: movie
});

export const removeFavorite = movie => ({
  type: 'favorites/REMOVE',
  payload: movie
});
