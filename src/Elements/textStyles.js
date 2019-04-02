import styled from 'styled-components';
import { Link as RouterLink} from 'react-router-dom';
import { THEME } from '../util';

export const Link = styled(RouterLink)`
  color: ${props => props.page ? THEME[props.page].color : 'white'};
  height: 100%;
  text-decoration: none;
`;

export const LinkA = styled.a`
  color: ${ props => props.page ? THEME[props.page].color : 'white'};
  font-size: ${ props => props.size ? props.size : ''};
  height: 100%;
  text-decoration: none;
`;

export const List = styled.li`
  background: ${props => props.color};
  display: inline;
  padding: 10px;
`;

export const MainTitle = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  color: ${props => props.color};
  color: white;
  font-family: Roboto;
  font-size: 3rem;
`;

export const NameLogo = styled.h1`
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  justify-content: flex-end;
  padding-right: 5px;
  text-decoration: none;
`;

export const NavList = styled.li`
  @import url('https://fonts.googleapis.com/css?family=Oswald');
  align-self: center;
  display: inline;
  font-family: Oswald;
  padding-right: 15px;
  text-transform: uppercase;
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

export const TitleLink = styled(RouterLink)`
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  font-weight: bold;
  justify-content: flex-start;
  padding-left: 5px;
  text-decoration: none;
`;
