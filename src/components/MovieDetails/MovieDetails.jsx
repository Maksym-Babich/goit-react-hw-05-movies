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
  DescrWrapper,
} from 'components/MovieDetails/MovieDetails.styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovie } from 'api';
import { useEffect, useState, useRef } from 'react';
import { Suspense } from 'react';
import { Grid } from 'react-loader-spinner';

export default function MovieDetails() {
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
              : 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'
          }
          alt={movie.title}
        />
        <DescrWrapper>
          <MovieTitle>{movie.title}</MovieTitle>
          <Paragraph>{`User score: ${movie.vote_average}`}</Paragraph>
          <Overwiev>Owerview</Overwiev>
          <Paragraph>{movie.overview}</Paragraph>
          <Genres>Genres</Genres>
          <Paragraph>
            {movie.genres?.map(genre => genre.name).join(', ')}
          </Paragraph>
        </DescrWrapper>
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
      <Suspense
        fallback={
          <Grid
            height="80"
            width="80"
            color="#fff"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{ placeSelf: 'center' }}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
