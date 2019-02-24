import { decorate, observable, action } from 'mobx';
import api from '../services/api';
import { throwError } from 'rxjs';

class MovieSearchStore {

  // constructor() {
  //   this.getMovies('avengers');
  // }

  list = [];
  termSearch = '';
  resultTotal = 0;
  pageCurrent = 1;
  isLoading = false;

  async getMovies(term = this.termSearch) {
    this.isLoading = true;
    this.pageCurrent = this.termSearch !== term ? 1 : this.pageCurrent;
    this.termSearch = term;

    const cached = sessionStorage.getItem(`@Search:${term}`);

    if (cached && this.pageCurrent === 1) {
      this.list = JSON.parse(cached);
      this.resultTotal = JSON.parse(sessionStorage.getItem(`@Search:${term}:resultTotal`));
      this.isLoading = false;
      return;
    }

    try {

      const response = await api.get('', {
        params: {
          s: this.termSearch,
          page: this.pageCurrent
        }
      });

      this.isLoading = false;
      this.resultTotal = response.data.totalResults;
      this.list = this.removeDuplicateMovie(response.data.Search, 'imdbID');

      if (this.pageCurrent === 1) {
        sessionStorage.setItem(`@Search:${term}`, JSON.stringify(this.list));
        sessionStorage.setItem(`@Search:${term}:resultTotal`, JSON.stringify(response.data.totalResults));
        sessionStorage.setItem(`@Search:${term}:pageCurrent`, JSON.stringify(this.pageCurrent));
      }

    } catch (error) {
      console.log(error);
      this.isLoading = false;
      return error;
    }

  }

  clearSearch() {
    this.list = []
  }

  changePage(page) {
    //Clear Cache
    this.pageCurrent = page;
    this.isLoading = true;
    this.getMovies();
  }

  removeDuplicateMovie(list, key) {
    const unique = list
      .map(e => e[key])
      .map((e, i, arr) => arr.indexOf(e) === i && i)
      .filter(e => list[e]).map(e => list[e]);

    return unique;
  }

}

decorate(MovieSearchStore, {
  list: observable,
  termSearch: observable,
  pageCurrent: observable,
  resultTotal: observable,
  isLoading: observable,
  changePage: action,
  getMovies: action,
  clearSearch: action
})

export default MovieSearchStore;


