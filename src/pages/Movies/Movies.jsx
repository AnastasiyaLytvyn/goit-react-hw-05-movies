import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/MovieAPI';
import { Form, Input, Button } from './Movies.styled';
import { MoviesList } from 'components/MovieList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';
  console.log(query);

  useEffect(() => {
    if (query === null || query === '') {
      return;
    }
    async function fetchMovie() {
      const res = await fetchSearchMovies(query);
      setMovies(res);
      console.log(res);
    }
    fetchMovie();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ name: form.elements.name.value });
    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Search movies"></Input>
        <Button type="submit">Search</Button>
      </Form>
      {movies.length > 0 ? <MoviesList movies={movies} /> : null}
    </>
  );
};

export default Movies;
