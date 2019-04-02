import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FaRegCaretSquareLeft } from "react-icons/fa";
import { HeaderContainer, NavContainer } from '../Elements/containerStyles';
import { HeaderBackground } from '../Elements/backgroundStyles';

export default function Header({ color, handlePageChange }) {
  const [dropdown, setdropdown] = useState(false);
  const links = ['about', 'projects', 'cooking', 'contact']; // different pages

  // map each page to a header
  const list = links.map((link, i) => {
    return (
      <Li key={i}>
        <A
          to={`/${link}`}
          onClick={() => handlePageChange(link)}>
          {link}
        </A>
      </Li>
    )
  })

  // set header background animation
  const { height, c } = useSpring({
    from: { height: 0, c: '#00000000' },
    to: { height: 50, c: color },
  });

  // set toggle animation
  const { transform, opacity } = useSpring({
    transform: dropdown ? "translate3d(0,0,0)" : "translate3d(-500px,0,0)",
    opacity: dropdown ? 1.0 : 0.0,
  });


  return (
    <>
      <HeaderBackground style={{ height, background: c}}>
        <HeaderContainer>
          <H1
            to='/'
            onClick={() => {handlePageChange('home')}}>
            JP
          </H1>
          <NavContainer>
            <Nav style={{ transform, opacity}}>
              {list}
            </Nav>
            <H3 onClick={() => setdropdown(!dropdown)}>
              <FaRegCaretSquareLeft />
            </H3>
          </NavContainer>
        </HeaderContainer>
      </HeaderBackground>
    </>
  )
}


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

const Nav = styled(animated.nav)`
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
