import {
  List,
  ListItem,
  Image,
  Name,
  Character,
} from 'components/Cast/Cast.styled';

export function Cast() {
  return (
    <List>
      <ListItem>
        <Image />
        <Name>Actor</Name>
        <Character>Character: Johny</Character>
      </ListItem>
    </List>
  );
}
