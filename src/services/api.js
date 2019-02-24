import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.omdbapi.com',
  params: {
    apikey: process.env.REACT_APP_OMDBAPI,
    plot: 'full',
    // tomatoes:true
  }
});
