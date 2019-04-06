import { decorate, observable, action } from 'mobx';
import api from '../services/api';

class MovieDetailStore {

  movie = {};
  isLoading = false;

  getMovie = async (id) => {
    this.isLoading = true;


    const cached = sessionStorage.getItem(`@MoveDetail:${id}`);
    if (cached) {
      console.log('CACHE');
      this.movie = JSON.parse(cached);
      this.isLoading = false;
      return;
    }


    try {
      const response = await api.get('', {
        params: {
          i: id
        }
      });


      this.movie = response.data;
      sessionStorage.setItem(`@MoveDetail:${id}`, JSON.stringify(response.data));
      this.isLoading = false;

    } catch (error) {
      console.log(error);
      this.isLoading = false;
    }

  }

}


decorate(MovieDetailStore, {
  movie: observable,
  isLoading: observable,
  getMovie: action,
})


export default MovieDetailStore;
