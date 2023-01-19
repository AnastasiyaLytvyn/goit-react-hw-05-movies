import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/MovieAPI';
import { List, NavItem, Title } from 'components/MovieList/MovieList';

export const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setTrendingMovie);
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <List>
        {trendingMovie.map(({ id, title }) => (
          <NavItem to={`movies/${id}`} key={id}>
            {title}
          </NavItem>
        ))}
      </List>
    </>
  );
};
