import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from '../util';
import HeaderDiv from '../Elements/HeaderDiv';
import { FaRegCaretSquareLeft } from "react-icons/fa";
function useWindowWidth() {
  useEffect(() => {
    const handleResize = () => console.log(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
}


export default function Header({ color, handlePageChange, currentPage }) {
  const [dropdown, setdropdown] = useState(false);
  const links = ['about', 'projects', 'cooking', 'contact'];
  const list = links.map((link, i) => {
    return (
      <Li key={i}>
        <A to={`/${link}`} onClick={() => {
          handlePageChange(link)
        }}>
          {link}
        </A>
      </Li>
    )
  })
 useWindowWidth()
  return (
    <>
      <HeaderDiv color={color}>
        <HeaderContainer>
          <H1 to='/' onClick={() => {
            handlePageChange('')
          }}>
            JP
        </H1>
          <Nav>
            {dropdown && list}
          </Nav>
          <Nav>
            <H3 onClick={() => setdropdown(!dropdown)}>
              <FaRegCaretSquareLeft />
            </H3>
          </Nav>
        </HeaderContainer>
      </HeaderDiv>
    </>
  )
}

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-area: 1 / 1 / 2 / -1;
  position: sticky;
  top: 0;
  height: 100%;
  z-index: 100;
`;

const H1 = styled(Link)`
  display: flex;
  justify-content: flex-start;
  padding-left: 5px;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50%;
`;

const H3 = styled.h1`
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  cursor: pointer;
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
