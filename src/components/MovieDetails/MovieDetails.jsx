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
import { Outlet } from 'react-router-dom';

export function MovieDetails() {
  return (
    <>
      <StyledLink>Go back</StyledLink>
      <Card>
        <Image />
        <MovieTitle>Title</MovieTitle>
        <Paragraph>User score: 10%</Paragraph>
        <Overwiev>Owerview</Overwiev>
        <Paragraph>Some details</Paragraph>
        <Genres>Genres</Genres>
        <Paragraph>Drama</Paragraph>
      </Card>
      <AddInfo>Additional information</AddInfo>
      <AddInfoList>
        <AddInfoListItem>
          <StyledLink to="/goit-react-hw-05-movies/movies/:movieId/cast">
            Cast
          </StyledLink>
        </AddInfoListItem>
        <AddInfoListItem>
          <StyledLink to="/goit-react-hw-05-movies/movies/:movieId/cast">
            Reviews
          </StyledLink>
        </AddInfoListItem>
      </AddInfoList>
      <Outlet />
    </>
  );
}
