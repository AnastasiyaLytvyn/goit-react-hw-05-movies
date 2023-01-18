import {
  List,
  NavItem,
  Title,
} from 'components/TrendingList/TrendingList.styled';

export const TrendingList = ({ movies }) => {
  return (
    <List>
      <Title>Trending today</Title>
      {movies.map(({ id, title }) => (
        <NavItem to={`/movies/${id}`} key={id}>
          {title}
        </NavItem>
      ))}
    </List>
  );
};
