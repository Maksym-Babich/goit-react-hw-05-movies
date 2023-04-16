import {
  List,
  ListItem,
  Author,
  Review,
  NoReviews,
} from 'components/Reviews/Reviews.styled';
import { getMovieReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(reviews => {
      setReviews(reviews);
    });
  }, [movieId]);

  return !reviews.length ? (
    <NoReviews>We don't have any reviews for this movie</NoReviews>
  ) : (
    <List>
      {reviews.map(review => {
        return (
          <ListItem key={review.id}>
            <Author>{review.author}</Author>
            <Review>{review.content}</Review>
          </ListItem>
        );
      })}
    </List>
  );
}
