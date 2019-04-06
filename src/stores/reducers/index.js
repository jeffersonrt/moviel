import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer
});
