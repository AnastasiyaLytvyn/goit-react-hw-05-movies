import { fetchTrendingMovies } from 'services/MovieAPI';
import { useState, useEffect } from 'react';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setTrendingMovie);
  }, []);

  return (
    <>
      <TrendingList movies={trendingMovie} />
    </>
  );
};
