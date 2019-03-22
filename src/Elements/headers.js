import styled from 'styled-components';

export const H1 = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: Roboto;
  font-size: 3rem;
  color: white;
  color: ${props => props.color};
`;
