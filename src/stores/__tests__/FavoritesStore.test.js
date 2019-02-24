import FavoritesStore from '../FavoritesStore';
// import { toJS } from 'mobx';

describe('FavoritesStore', () => {
  let fStore;

  beforeEach(() => {
    fStore = new FavoritesStore();
  });

  it('Add a favorite movie', () => {

    fStore.addFavorite({
      "Title": "Batman: The Killing Joke",
      "Year": "2016",
      "imdbID": "tt4853102",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    });

    expect(fStore.movies[0]).toEqual({
      "Title": "Batman: The Killing Joke",
      "Year": "2016",
      "imdbID": "tt4853102",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    });
  });

  it('Remove a favorite movie', () => {

    let movie1 = {
      "Title": "Batman: The Killing Joke",
      "Year": "2016",
      "imdbID": "tt4853102",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    };

    let movie2 = {
      "Title": "Batman: Mask of the Phantasm",
      "Year": "1993",
      "imdbID": "tt0106364",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODE0YTBiMjQtNWQyZC00YTNjLWJmYjAtMWUwNzI4NGVlZTAzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    };

    fStore.addFavorite(movie1);
    fStore.addFavorite(movie2);
    fStore.removeFavorite(movie1);

    expect(fStore.movies[0]).toEqual(movie2);

  });

});



