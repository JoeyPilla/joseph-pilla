import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

export default function TitleDiv({children, currentPage}) {
  const props = useSpring({
    from:{ opacity: 0, transform: 'translate3d(300px,0,0)'},
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    reset: true,
  });
  return (
    <>
      <animated.div style={props}>
        <Title>
          {currentPage}
        </Title>
        {children}
      </animated.div>
    </>
  )
}

const Title = styled.h1`
height:100%;
  display: flex;
  justify-content: center;
  transition: background-color 1s ease;
  align-self: center;
  margin:0px;
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffffbb;
  padding-top: 5px;
  text-transform: capitalize;
  cursor: default;
`;