import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from '../util';
import HeaderDiv from '../Elements/HeaderDiv';
import TitleDiv from './TitleDiv';

export default function Header(props) {
  const { color, setColor, setCurrentPage, currentPage } = props;
  const links = ['about', 'projects', 'cooking', 'contact'];
  const list = links.map((link, i) => {
    return (
      <Li key={i}>
        <A to={`/${link}`} onClick={() => {
          setColor(THEME[link].color)
          setCurrentPage(link)
        }}>
          {link}
        </A>
      </Li>
    )
  })
  return (
    <>
      <HeaderDiv color={color}/>
      <HeaderContainer newHeaderColor={color}>
        <H1 to='/' onClick={() => {
          setColor(THEME.home.color)
          setCurrentPage('')
        }}>
          JP
        </H1>
        <TitleDiv currentPage={currentPage}/>
        <Nav>
          {list}
        </Nav>
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-area: 1 / 1 / 2 / -1;
  height: 100%;
`;

const H1 = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-self: center;
  margin:0px;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const Li = styled.li`
  @import url('https://fonts.googleapis.com/css?family=Oswald');
  font-family: Oswald;
  display: inline;
  padding-right: 15px;
  align-self: center;
  text-transform: uppercase;
`;

const A = styled(Link)`
  color: white;
  height: 100%;
  text-decoration: none;
`;

