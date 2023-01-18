import axios from 'axios';

const KEY ='9b0207e3b87a8a2af201131b2a01e4c9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios('trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });
  return response.data.results;
}
