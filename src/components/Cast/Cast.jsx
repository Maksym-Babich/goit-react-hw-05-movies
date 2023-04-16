import {
  List,
  ListItem,
  Image,
  Name,
  Character,
  ActorInfo,
} from 'components/Cast/Cast.styled';
import { getMovieCast } from 'api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(cast => {
      setCast(cast);
    });
  }, [movieId]);

  return (
    <List>
      {cast?.map(actor => {
        return (
          <ListItem key={actor.id}>
            <Image
              alt={actor.name}
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                  : 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'
              }
            />
            <ActorInfo>
              <Name>{actor.name}</Name>
              <Character>{`Character: ${actor.character}`}</Character>
            </ActorInfo>
          </ListItem>
        );
      })}
    </List>
  );
}
