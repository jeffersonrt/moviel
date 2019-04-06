import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import movieDetailReducer from './movieDetailReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
  search: searchReducer,
  movieDetail: movieDetailReducer,
  favorites: favoritesReducer
});
