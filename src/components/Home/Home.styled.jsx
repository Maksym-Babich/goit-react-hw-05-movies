import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  color: #fff;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 75px) / 5);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;

export const Span = styled.span`
  color: #fff;
`;
