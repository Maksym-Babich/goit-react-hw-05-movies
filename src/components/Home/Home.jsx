import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Title,
  List,
  ListItem,
  StyledLink,
  Image,
  Span,
} from 'components/Home/Home.styled';
import { getTrending } from 'api';

export default function Home() {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending().then(movies => {
      setTrending(movies);
    });
  }, []);

  return (
    <>
      <Title>Trending</Title>
      <List>
        {trending.map(movie => {
          return (
            <ListItem key={movie.id}>
              <StyledLink
                to={`/goit-react-hw-05-movies/movies/${movie.id}`}
                state={{ from: location }}
              >
                <Image
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                />
                <Span>{movie.title}</Span>
              </StyledLink>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
