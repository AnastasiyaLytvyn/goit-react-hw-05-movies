import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 5px;
  background-color: lightyellow;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 4px;
  border: none;

  :hover,
  :focus {
    outline: 1px solid lightgrey;
  }
`;

export const Button = styled.button`
  color: grey;
  background-color: lightyellow;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 4px;
  border: none;

  :hover {
    color: lightcoral;
    outline: 1px solid lightgrey;
  }
`;
