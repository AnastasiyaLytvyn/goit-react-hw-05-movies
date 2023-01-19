import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from 'services/MovieAPI';
import { Container, Desc, Image, Item, List, Title } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMoviesCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <Container>
      <List>
        {cast.map(({ id, name, profile_path, character }) => (
          <Item key={id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            ></Image>
            <Title>{name}</Title>
            <Desc>{character}</Desc>
          </Item>
        ))}
      </List>
    </Container>
  );
};
