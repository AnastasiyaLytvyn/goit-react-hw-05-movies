import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0;
  padding: 20px;
  border-bottom: 1px solid lightgrey;
`;

export const Button = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Image = styled.img`
  max-width: 200px;
  height: 300px;
`;

export const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const H3 = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 10px 0;
`;

export const ListItem = styled(NavLink)`
  padding: 0 40px;
  text-decoration: none;
`;

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  padding: 0 20px;
`;
