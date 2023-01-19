import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0 40px;
  list-style: none;
`;

export const NavItem = styled(NavLink)`
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;

  :hover {
    color: lightcoral;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 0px 40px 10px 40px;
  margin: 0;
  color: black;
`;
