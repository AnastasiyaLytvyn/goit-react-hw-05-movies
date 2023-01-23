import { useLocation } from 'react-router-dom';
import { Desc, List, NavItem} from './MovieList';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <List>
      <Desc>We found movies:</Desc>
      {movies.map(({ id, title }) => (
        <NavItem to={`/movies/${id}`} key={id} state={{ from: location }}>
          {title}
        </NavItem>
      ))}
    </List>
  );
};
