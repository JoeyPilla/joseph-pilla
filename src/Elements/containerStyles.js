import styled from 'styled-components';
import { animated } from 'react-spring';

export const AppContainer = styled.div`
  color: white;
  display: grid;
  grid-template: 50px 1fr 50px / auto;
  height: 100vh;
`;

export const BodyContainer = styled(animated.div)`
  align-self: center;
  display: flex;
  flex-direction: column;
  grid-area: 2 / 1 / 3 / -1;
  margin-top: ${props => props.position}
  opacity: ${props => props.opacity}
  overflow: auto;
  padding: 0 20% 30%;
  position: relative;
`;

export const FooterContainer = styled.div`
  align-items: flex-end;
  display: flex;
  grid-area: 3 / 1 / 4 / -1;
  justify-content: center;
  padding: 20px;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-area: 1 / 1 / 2 / -1;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavContainer = styled(animated.div)`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: flex-end;
`;
