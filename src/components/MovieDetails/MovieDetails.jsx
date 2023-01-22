import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/MovieAPI';
import {
  Container,
  Wrapper,
  Button,
  Image,
  P,
  Title,
  H2,
  H3,
  List,
  ListItem,
  Name,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMoviesDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, original_title, vote_average, overview, genres } =
    movie;

  return (
    <>
      <Button to={backLinkHref}>Back</Button>
      <Container>
        
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        ></Image>
        <Wrapper>
          <Title>{original_title}</Title>
          <P>User Score: {parseInt(vote_average * 10)}%</P>
          <H2>Owerview</H2>
          <P>{overview}</P>
          <H3>Genres</H3>
          <P>{genres.map(genre => genre.name).join(', ')}</P>
        </Wrapper>
      </Container>
      <List>
        <Name>Additional Information</Name>
        <ListItem to={`cast`}>Cast</ListItem>
        <ListItem to={`reviews`}>Reivews</ListItem>
        <Outlet />
      </List>
    </>
  );
};
