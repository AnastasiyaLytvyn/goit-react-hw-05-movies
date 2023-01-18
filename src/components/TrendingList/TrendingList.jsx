import {
  List,
  NavItem,
  Title,
} from 'components/TrendingList/TrendingList.styled';

export const TrendingList = ({ movie }) => {
  return (
    <List>
      <Title>Trending today</Title>
      {movie.map(({ id, title }) => (
        <NavItem key={id}>{title}</NavItem>
      ))}
    </List>
  );
};
