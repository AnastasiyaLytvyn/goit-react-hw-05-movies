import axios from 'axios';

const KEY = '9b0207e3b87a8a2af201131b2a01e4c9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios('trending/movie/day', {
    params: { api_key: KEY },
  });
  return response.data.results;
}

export async function fetchSearchMovies(query) {
  const response = await axios('search/movie', {
    params: {
      api_key: KEY,
      query: `${query}`,
      page: 1,
    },
  });
  return response.data.results;
}

export async function fetchMoviesDetails(movie_id) {
  const response = await axios(`/movie/${movie_id}`, {
    params: { api_key: KEY },
  });
  return response.data;
}

export async function fetchMoviesCast(movie_id) {
  const response = await axios(`/movie/${movie_id}/credits`, {
    params: { api_key: KEY },
  });
  return response.data.cast;
}

export async function fetchMoviesReviews(movie_id) {
  const response = await axios(`/movie/${movie_id}/reviews`, {
    params: { api_key: KEY },
  });
  return response.data.results;
}
