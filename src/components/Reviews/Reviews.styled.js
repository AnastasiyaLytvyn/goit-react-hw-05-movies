import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid lightgrey;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 20px 40px;
  list-style: none;
`;
export const Item = styled.li``;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 10px 0;
`;

export const Desc = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;
