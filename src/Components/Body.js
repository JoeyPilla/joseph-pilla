import React from 'react';
import {
  useSpring,
} from 'react-spring';
import {
  BodyContainer,
} from '../Elements/containerStyles';
import {
  MainTitle,
  Text,
} from '../Elements/textStyles';

export default function Body() {

  // set styles with react spring to run on load
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
      <MainTitle>I am Joseph Pilla</MainTitle>
      <Text>A full stack web developer</Text>
    </BodyContainer>
  )
}
