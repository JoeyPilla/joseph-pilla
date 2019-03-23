import React from 'react'
import styled from 'styled-components';
import { H1 } from '../Elements/headers';
import BodyContainer from './BodyContainer';

export default function Body() {
  return (
    <BodyContainer>
          <H1>I am Joseph Pilla</H1>
          <P>A full stack web developer</P>
    </BodyContainer>
  )
}

const P = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: Open Sans;
  margin: 0px;
`;
