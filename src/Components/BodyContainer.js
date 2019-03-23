import React from 'react'
import styled from 'styled-components';
import AnimatedDiv from '../Elements/AnimatedDiv';

export default function BodyContainer({ children }) {
  return (
    <BodyWrapper>
      <AnimatedDiv>
        {children}
      </AnimatedDiv>
    </BodyWrapper>
  )
}

const BodyWrapper = styled.div`
  margin-top: ${props => props.position}
  opacity: ${props => props.opacity}
  position: relative;
  padding: 0 20% 30%;
  display: flex;
  flex-direction: column;
  align-self: center;
  grid-area: 2 / 1 / 3 / -1;
`;
