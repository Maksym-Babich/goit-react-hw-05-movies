import { Outlet } from 'react-router-dom';
import {
  Header,
  StyledLink,
  Nav,
  Span,
} from 'components/SharedLayout/SharedLayout.styled';

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
      <Outlet />
    </>
  );
}
