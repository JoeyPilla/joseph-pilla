import React from 'react';
import styled from 'styled-components';
import {
  animated,
  useSpring,
} from 'react-spring';

export default function PageContainer({children}) {
  const { opacity, transform } = useSpring({
    from:{
      opacity: 0,
      transform: "translate3d(0,-500px,0)"
    },
    to:{ opacity: 1, transform: "translate3d(0,0,0)" }
  });
  return (
    <BodyWrapper
      style={{
        transform,
        opacity,
      }}>
        {children}
    </BodyWrapper>
  )
}

const BodyWrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  grid-area: 2 / 1 / 3 / -1;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  justify-self: center;
  max-width: 900px;
`;
