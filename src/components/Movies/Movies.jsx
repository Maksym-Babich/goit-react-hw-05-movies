import {
  Form,
  Input,
  Button,
  List,
  ListItem,
} from 'components/Movies/Movies.styled';

export function Movies() {
  return (
    <>
      <Form>
        <Input />
        <Button type="submit">Search</Button>
      </Form>
      <List></List>
    </>
  );
}
