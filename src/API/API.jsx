import axios from 'axios';
import {
  API_URL, 
  SEARCH_BASE_URL,
  POPULAR_BASE_URL
} from '../Config/config'; 

export const apiCall = {
  getMovies: async () => {
    return await axios.get(`${POPULAR_BASE_URL}`)
          .then (res => { return res.data.results; })
          .catch(err => { return err; })   
  },
  getMovie: async (movieId) => {

  }, 
  getMoviesBySearch: async (searchTerm) => {

  },
  getMoviesByGenres: async (id) => {

  },
  getTrendingMovies: async () => {

  },
  getMoviesDiscover: async () => {

  },
  getTvShows: async () => {

  }
}
  