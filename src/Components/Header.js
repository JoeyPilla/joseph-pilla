import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from '../util';
import HeaderDiv from '../Elements/HeaderDiv';
import TitleDiv from './TitleDiv';

function useWindowWidth() {
  useEffect(() => {
    const handleResize = () => console.log(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
}


export default function Header(props) {
  const { color, setColor, setCurrentPage, currentPage } = props;
  const [dropdown, setdropdown] = useState(false);
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
 useWindowWidth()
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
        <TitleDiv currentPage={currentPage} />
        {
          dropdown ? <Nav2>
            {list}        <H3 onClick={() => setdropdown(!dropdown)}>
              M
        </H3>
          </Nav2> : <Nav2>
              <H3 onClick={() => setdropdown(!dropdown)}>
                M
        </H3>
            </Nav2>
        }
      </HeaderContainer>
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
  position: absolute;
  top: 50px;
  left: 50%;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const Nav2 = styled.nav`
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
