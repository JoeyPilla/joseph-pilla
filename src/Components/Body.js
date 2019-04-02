import React from 'react'
import { Text } from '../Elements/textStyles';
import { H1 } from '../Elements/headers';
import {BodyContainer} from '../Elements/containerStyles';
import { useSpring } from 'react-spring';

export default function Body() {

  const {opacity, transform} = useSpring({
    from:{
      opacity: 0,
      transform: "translate3d(0,-500px,0)"
    },
    to:{ opacity: 1, transform: "translate3d(0,0,0)" }
  });

  return (
    <BodyContainer style={{
      transform,
      opacity,
    }}>
      <H1>I am Joseph Pilla</H1>
      <Text>A full stack web developer</Text>
    </BodyContainer>
  )
}
