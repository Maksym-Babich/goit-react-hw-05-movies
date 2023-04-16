import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  color: #fff;
  padding: 30px;
  display: flex;
`;

export const DescrWrapper = styled.div``;

export const Image = styled.img`
  width: 500px;
  display: block;
  margin-right: 30px;
`;

export const MovieTitle = styled.h2``;

export const Paragraph = styled.p``;

export const Overwiev = styled.h3``;

export const Genres = styled.h4``;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 75px;
  padding: 10px;
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;

  :hover {
    background-color: #1632af;
  }
`;

export const AddInfo = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;
`;

export const AddInfoList = styled.ul`
  list-style: none;
  display: flex;
`;

export const AddInfoListItem = styled.li`
  margin: 0;
  padding: 0;
`;
