import React, { Component } from 'react'
import styled from 'styled-components';
import { Spring } from 'react-spring/renderprops';
import { useSpring, animated } from 'react-spring';


export default class Body extends Component {

  
  render() {
    return (
      
        <Spring
          from={{ position: '-500px', opacity: 0 }}
          to={{position: '0', opacity: 1}}
        >
          {props => (
          <BodyContainer
            position={props.position}
            opacity={props.opacity}
          >
            <H1>I am Joseph Pilla</H1>
            <P>A full stack web developer</P>
          </BodyContainer>
          )
          }
        </Spring>
    )
  }
}

const BodyContainer = styled.div`
  margin-top: ${props => props.position}
  opacity: ${props => props.opacity}
  position: relative;
  padding: 0 20% 30%;
  display: flex; 
  flex-direction: column;
  align-self: center;
  grid-area: 2 / 1 / 3 / -1;
`
const H1 = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: Roboto;
 font-size: 3rem;
`

const P = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  font-family: Open Sans;
  margin: 0px;
`
