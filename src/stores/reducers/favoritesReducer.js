export default (state = [], action) => {

  switch (action.type) {
    case 'favorites/ADD':
      return [...state, action.payload]

    case 'favorites/REMOVE':
      return state.filter(movie => movie['imdbID'] !== action.payload['imdbID'])

    default:
      return state;
  }

};
