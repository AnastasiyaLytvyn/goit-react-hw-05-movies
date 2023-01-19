import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Reviews } from './Reviews/Reviews';
import { Cast } from './Cast/Cast';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
