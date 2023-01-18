import { fetchTrendingMovies } from 'components/services/MovieAPI';
import { useState,useEffect } from 'react';
import { List, NavItem, Title } from 'components/TrendingList/TrendingList.styled';

export const Home = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setTrendingMovie);
  }, []);


  return (
    <List>
      <Title>Trending today</Title>
      {trendingMovie.map(({id, title}) => (
        <NavItem key={id}>{title}</NavItem>
      ))}
    </List>
  );
};
