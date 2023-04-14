import {
  List,
  ListItem,
  Author,
  Review,
} from 'components/Reviews/Reviews.styled';

export function Reviews() {
  return (
    <List>
      <ListItem>
        <Author>Author 1</Author>
        <Review>Some movie review</Review>
      </ListItem>
    </List>
  );
}
