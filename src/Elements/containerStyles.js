import styled from 'styled-components';
import { animated } from 'react-spring';

export const AppContainer = styled.div`
  display: grid;
  color: white;
  grid-template: 50px 1fr 50px / auto;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-area: 1 / 1 / 2 / -1;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const BodyContainer = styled(animated.div)`
  margin-top: ${props => props.position}
  opacity: ${props => props.opacity}
  position: relative;
  padding: 0 20% 30%;
  display: flex;
  flex-direction: column;
  align-self: center;
  grid-area: 2 / 1 / 3 / -1;
`;