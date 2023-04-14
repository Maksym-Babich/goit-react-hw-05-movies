import { useEffect, useState } from 'react';
import { Title, List, ListItem, StyledLink } from 'components/Home/Home.styled';
import { getTrending } from 'api';

export function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending().then(movies => {
      setTrending(movies);
      console.log(movies);
    });
  }, []);

  return (
    <>
      <Title>Trending</Title>
      <List>
        {trending.map(movie => {
          return (
            <ListItem>
              <StyledLink to={`/goit-react-hw-05-movies/movies/${movie.id}`}>
                {movie.title}
              </StyledLink>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
