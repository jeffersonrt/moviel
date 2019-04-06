export default (state = [], action) => {
  switch (action.type) {
    case 'movies/SEARCH':
      return action.payload;
    case 'movies/GET':
      return action.payload;
    default:
      return state;
  }
}
