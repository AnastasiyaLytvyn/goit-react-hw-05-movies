import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/MovieAPI';
import {
  Container,
  Wrapper,
  Image,
  P,
  Title,
  H2,
  H3,
  List,
  ListItem,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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
        <H3>Additional Information</H3>
        <ListItem to={`cast`}>Click here Cast</ListItem>
        <ListItem to={`reviews`}>Click here Reivews</ListItem>
        <Outlet />
      </List>
    </>
  );
};
