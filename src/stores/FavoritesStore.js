import { decorate, observable, action, autorun } from "mobx"

class FavoritesStore {
  constructor() {
    this.getFavorites();
  }

  movies = [];

  addFavorite = (movie) => {

    if (this.isFavorite(movie)) {
      this.removeFavorite(movie);
      return
    }

    this.movies.push(movie);
    this.updateFavorites();

  }

  isFavorite = (movie) => {
    const myFavorite = this.movies.find(favorite => favorite['imdbID'] === movie['imdbID']);
    return myFavorite ? true : false;
  }

  removeFavorite(favorite) {
    this.movies = this.movies.filter(movie => {
      return movie['imdbID'] !== favorite['imdbID']
    });
    this.updateFavorites();
  }

  updateFavorites() {
    localStorage.setItem('@Favorites:movies', JSON.stringify(this.movies));
  }

  getFavorites() {
    autorun((reaction) => {
      const favorites = localStorage.getItem('@Favorites:movies');
      if (favorites) {
        this.movies = JSON.parse(favorites);
      }
      reaction.dispose();
    });
  }

}

decorate(FavoritesStore, {
  movies: observable,
  // isFavorite: observable,
  addFavorite: action,
  removeFavorite: action,
  getFavorites: action,
  isFavorite: action,
})

export default FavoritesStore;
