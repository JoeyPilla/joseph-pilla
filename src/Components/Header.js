import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from '../util';

export default function Header(props) {
  return (
    <>
      <HeaderBackground
        background={props.color}
      />
      <HeaderContainer
        newHeaderColor={props.color}
      >
        <H1
          to='/'
          onClick={() => props.setColor(THEME.home.color)}>
          JP
        </H1>
        <Nav>
          <Li>
            <A
              to='/about'
              onClick={() => props.setColor(THEME.about.color)}>
              About
              </A>
          </Li>
          <Li>
            <A
              to='/Projects'
              onClick={() => props.setColor(THEME.projects.color)}>
              Projects
              </A>
          </Li>
          <Li>
            <A
              to='/Cooking'
              onClick={() => props.setColor(THEME.cooking.color)}>
              Cooking
              </A>
          </Li>
          <Li>
            <A
              to='contact'
              onClick={() => props.setColor(THEME.contact.color)}>
              Contact
              </A>
          </Li>
        </Nav>
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  transition: background-color 1s ease;
  transition: padding 1s ease;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: ${props => props.newHeaderColor === '' ? 0 : '20px'};
  grid-area: 1 / 1 / 2 / -1;
`;

const HeaderBackground = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  align-self: center;
  width: 100%;
  height: 100%;
  background: ${props => props.background};
`;

const H1 = styled(Link)`
  padding: 10px;
  transition: background-color 1s ease;
  background: ${props => props.background};
  margin:0px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
`;

const Li = styled.li`
  @import url('https://fonts.googleapis.com/css?family=Oswald');
  font-family: Oswald;
  display: inline;
  transition: height 1s ease;
  padding: 22px 10px 21px;
  align-self: center;
  text-transform: uppercase;
`;

const A = styled(Link)`
  color: white;
  height: 100%;
  text-decoration: none;
`;
