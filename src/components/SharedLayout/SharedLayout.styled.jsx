import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 75px;
  color: #fff;
  border-bottom: 1px solid #fff;
  margin-bottom: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  text-decoration: none;

  :hover {
    background-color: #1632af;

    span {
      transform: scale(1.3);
    }
  }
`;

export const Span = styled.span`
  font-size: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  height: 100%;
`;
