const initalState = {
  data: [],
  totalResults: 0,
  loading: false,
  term: '',
  error: null,
  currentPage: 1
}

export default (state = initalState, action) => {
  switch (action.type) {
    case 'search/REQUEST':
      return { ...state, loading: true, term: action.payload.term };
    case 'search/SUCCESS':
      return {
        ...state,
        data: action.payload.data,
        totalResults: action.payload.totalResults,
        currentPage: action.payload.currentPage,
        loading: false,
        error: null,
      };
    case 'search/FAILURE':
      return {
        ...state,
        data: [],
        totalResults: 0,
        loading: false,
        error: action.payload.error,
        currentPage: 1
      };
    case 'search/CLEAR':
      return initalState;
      
    default:
      return state;
  }
}
