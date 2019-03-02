import React, { Component } from 'react'
import styled from 'styled-components';

export default class Body extends Component {
  render() {
    return (
      <BodyContainer>
        <H1>I am Joseph Pilla</H1>
       <P>A full stack web developer</P>
      </BodyContainer>
    )
  }
}

const BodyContainer = styled.div`
  position: relative;
  padding: 0 20% 30%;
  display: flex; 
  flex-direction: column;
  align-self: center;
  grid-area: 2 / 1 / 3 / -1;
`
const H1 = styled.h1`
 margin:0px;
 font-size: 3rem;
`

const P = styled.p`
  margin: 0px;
`
