import styled from 'styled-components';
import { animated } from 'react-spring';

export const BackgroundImage = styled.img`
  filter: contrast(1);
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  object-fit: cover;
  width: 100%;
  z-index: -2;
`;

export const HeaderBackground = styled(animated.div)`
  grid-area: 1 / 1 / 2 / -1;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Overlay = styled(animated.div)`
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
