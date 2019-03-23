import React from 'react'
import { useSpring, animated } from 'react-spring';

export default function AnimatedDiv({children}) {
  const {opacity, transform} = useSpring({
    from:{
      opacity: 0,
      transform: "translate3d(0,-500px,0)"
    },
    to:{ opacity: 1, transform: "translate3d(0,0,0)" }
  });
  return (
    <animated.div
      style={{
        transform,
        opacity,
      }}>
        {children}
    </animated.div>
  )
}
