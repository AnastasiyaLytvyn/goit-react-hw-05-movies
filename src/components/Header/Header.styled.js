import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px;
  margin-bottom: 16px;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;`

export const NavItem = styled(NavLink)`
  padding: 10px 18px;
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  color: black;

  &.active {
    color: lightcoral;
  }
  :hover:not(.active) {
    color: lightcoral;
  }
`;
