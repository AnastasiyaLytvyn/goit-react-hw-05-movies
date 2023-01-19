// import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { fetchSearchMovies } from 'services/MovieAPI';
import { Form, Input, Button } from './Movies.styled';

export const Movies = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//   const [movies, setMovies] = useState([]);
//   const search = searchParams.get('movie');

//   useEffect(() => {
//     if (!search) {
//       console.log('First render');
//       return;
//     }
//     async function fetchMovie(){
//         const res =await fetchSearchMovies(search);
//         setMovies(res.data.results);
//     }
//     fetchMovie();
//   },[search]);

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
  };

  return (<>
  <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Search movies"></Input>
      <Button type="submit">Search</Button>

    </Form>
    <ul></ul>
    </>
    
  );
};
