import styled from 'styled-components';
import { Link as RouterLink} from 'react-router-dom';
import { THEME } from '../util';

export const Link = styled(RouterLink)`
  color: ${props => props.page ? THEME[props.page].color : ''};
  height: 100%;
  text-decoration: none;
`;

export const LinkA = styled.a`
  color: ${ props => props.page ? THEME[props.page].color : 'white'};
  font-size: ${ props => props.size ? props.size : ''};
  height: 100%;
  text-decoration: none;
`;

export const Text = styled.p`
  font-size: 1.5rem;
`;

export const Title = styled.h1`
  color: ${props => props.page ? THEME[props.page].color : ''};
  font-size: 3rem;
  height: 100%;
  padding-left: 50px;
  text-decoration: none;
`;

export const MainTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: Roboto;
  font-size: 3rem;
  color: white;
  color: ${props => props.color};
`;

export const List = styled.li`
  background: ${props => props.color};
  display: inline;
  padding: 10px;
`;
