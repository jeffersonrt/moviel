const initalState = {
  movie: null,
  loading: false,
  error: null
}

export default (state = initalState, action) => {
  switch (action.type) {
    case 'movie/GET':
      return { ...state, loading: true };
    case 'movie/SUCCESS':
      return { movie: action.payload.movie, loading: false };
    case 'movie/FAILURE':
      return { movie: null, loading: false, error: action.payload.error };
    default:
      return state;
  }
}
