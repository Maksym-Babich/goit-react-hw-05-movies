import {
  Card,
  Image,
  MovieTitle,
  Paragraph,
  Overwiev,
  Genres,
  StyledLink,
  AddInfo,
  AddInfoList,
  AddInfoListItem,
} from 'components/MovieDetails/MovieDetails.styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovie } from 'api';
import { useEffect, useState, useRef } from 'react';

export function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLocation = useRef(
    location.state?.from ?? '/goit-react-hw-05-movies/movies'
  );

  useEffect(() => {
    getMovie(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieId]);

  return (
    <>
      <StyledLink to={goBackLocation.current}>Go back</StyledLink>
      <Card>
        <Image
          src={
            movie['backdrop_path']
              ? `https://image.tmdb.org/t/p/original${movie['backdrop_path']}`
              : null
          }
          alt={movie.title}
        />
        <MovieTitle>{movie.title}</MovieTitle>
        <Paragraph>{`User score: ${movie.vote_average}`}</Paragraph>
        <Overwiev>Owerview</Overwiev>
        <Paragraph>{movie.overview}</Paragraph>
        <Genres>Genres</Genres>
        <Paragraph>
          {movie.genres?.map(genre => genre.name).join(', ')}
        </Paragraph>
      </Card>
      <AddInfo>Additional information</AddInfo>
      <AddInfoList>
        <AddInfoListItem>
          <StyledLink to={`/goit-react-hw-05-movies/movies/${movieId}/cast`}>
            Cast
          </StyledLink>
        </AddInfoListItem>
        <AddInfoListItem>
          <StyledLink to={`/goit-react-hw-05-movies/movies/${movieId}/reviews`}>
            Reviews
          </StyledLink>
        </AddInfoListItem>
      </AddInfoList>
      <Outlet />
    </>
  );
}
