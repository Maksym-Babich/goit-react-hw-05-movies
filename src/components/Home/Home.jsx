import { Title, List, ListItem, StyledLink } from 'components/Home/Home.styled';

export function Home() {
  return (
    <>
      <Title>Trending</Title>
      <List>
        <ListItem>
          <StyledLink to="/goit-react-hw-05-movies/movies/:movieId"></StyledLink>
        </ListItem>
      </List>
    </>
  );
}
