import { Outlet } from 'react-router-dom';
import {
  Header,
  StyledLink,
  Nav,
} from 'components/SharedLayout/SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/goit-react-hw-05-movies">Home</StyledLink>
          <StyledLink to="/goit-react-hw-05-movies/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
}
