import React from 'react'
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
export default function HeaderDiv({children, color}) {
  
  const { height, c } = useSpring({
    from:{ height: 0, c: '#00000000'},
    to:{ height: 50, c: color},
  });

  return (
    <HeaderBackground>
      <animated.div style={{ height, background: c, position: 'sticky', top: 0}}>
        {children}
      </animated.div>
    </HeaderBackground>
  )
}

const HeaderBackground = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
`;
