import { Desc, List, NavItem} from './MovieList';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      <Desc>We found movies:</Desc>
      {movies.map(({ id, title }) => (
        <NavItem to={`/movies/${id}`} key={id}>
          {title}
        </NavItem>
      ))}
    </List>
  );
};
