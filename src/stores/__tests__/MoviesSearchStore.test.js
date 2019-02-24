import MovieSearchStore from '../MovieSearchStore';
// import { toJS } from 'mobx';

describe('MovieSearchStore', () => {
  let mSearchStore;

  beforeEach(() => {
    mSearchStore = new MovieSearchStore();
  });

  it('Search for movie', () => {


  });

  it('Clear Search', () => {
    mSearchStore.clearSearch();
    expect(mSearchStore.list).toHaveLength(0)
  });

});



