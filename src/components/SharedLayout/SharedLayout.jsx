import { Outlet } from 'react-router-dom';
import {
  Header,
  StyledLink,
  Nav,
  Span,
} from 'components/SharedLayout/SharedLayout.styled';
import { Suspense } from 'react';
import { Grid } from 'react-loader-spinner';

export function SharedLayout() {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/goit-react-hw-05-movies">
            <Span>Home</Span>
          </StyledLink>
          <StyledLink to="/goit-react-hw-05-movies/movies">
            <Span>Movies</Span>
          </StyledLink>
        </Nav>
      </Header>
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
