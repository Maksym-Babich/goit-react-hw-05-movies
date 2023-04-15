import {
  Form,
  Input,
  Button,
  List,
  ListItem,
  StyledLink,
} from 'components/Movies/Movies.styled';
import { useState, useEffect } from 'react';
import { searchMovies } from 'api';
import { useLocation, useSearchParams } from 'react-router-dom';

export function Movies() {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const [searchparams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchparams.get('query');
    if (query) {
      searchMovies(query).then(movies => {
        setResults(movies);
      });
    }
  }, [searchparams]);

  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.query.value;
    if (query !== '') {
      setSearchParams({ query: e.target.query.value });
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input name="query" />
        <Button type="submit">Search</Button>
      </Form>
      <List>
        {!results.length
          ? null
          : results.map(movie => {
              return (
                <ListItem key={movie.id}>
                  <StyledLink
                    to={`/goit-react-hw-05-movies/movies/${movie.id}`}
                    state={{ from: location }}
                  >
                    {movie.title}
                  </StyledLink>
                </ListItem>
              );
            })}
      </List>
    </>
  );
}
