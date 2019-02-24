import MovieSearchStore from './MovieSearchStore';
import FavoritesStore from './FavoritesStore';
import MovieDetailStore from './MovieDetailStore';

const moviesearchstore = new MovieSearchStore()
const favoritesstore = new FavoritesStore()
const moviedetailstore = new MovieDetailStore()

export default { moviesearchstore, favoritesstore, moviedetailstore }
