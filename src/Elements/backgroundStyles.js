import styled from 'styled-components';
import { animated } from 'react-spring';

export const Background = styled(animated.img)`
  filter: contrast(1);
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  object-fit: cover;
  width: 100%;
  z-index: -2;
`;

export const BackgroundBlack = styled(animated.div)`
  background-color: black;
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  object-fit: cover;
  opacity: .9;
  width: 100%;
  z-index: -1;
`;

export const Overlay = styled.div`
  background-color: black;
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  opacity: .7;
  width: 100%;
  z-index: -1;
`;
