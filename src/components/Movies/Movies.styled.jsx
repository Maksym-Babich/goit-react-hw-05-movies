import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  margin-right: 30px;
  width: 250px;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 10px;
  background-color: transparent;
  color: #fff;
`;

export const Button = styled.button`
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  background-color: transparent;
  cursor: pointer;

  :hover {
    background-color: #1632af;
  }
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
