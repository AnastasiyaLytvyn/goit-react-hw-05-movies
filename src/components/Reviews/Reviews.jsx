import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/MovieAPI';
import { Container, Desc, Item, List, Title } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetchMoviesReviews(movieId).then(setReview);
  }, [movieId]);

  if (!review) {
    return null;
  }

  return (
    <Container>
      <List>
        {!review.length && <div>There is no information about review</div>}
        {review.map(({ id, author, content }) => (
          <Item key={id}>
            <Title>Author: {author}</Title>
            <Desc>"{content}"</Desc>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Reviews;
