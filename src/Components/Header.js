import React, {useState} from 'react';
import {
  useSpring,
} from 'react-spring';
import {
  FaRegCaretSquareLeft,
} from "react-icons/fa";
import {
  HeaderContainer,
  NavContainer,
} from '../Elements/containerStyles';
import {
  HeaderBackground,
} from '../Elements/backgroundStyles';
import {
  Link,
  NameLogo,
  NavList,
  TitleLink,
} from '../Elements/textStyles';

export default function Header({ color, handlePageChange }) {
  const [dropDown, setDropDown] = useState(false);
  // different pages
  const links = [
    'about',
    'projects',
    'cooking',
    'contact',
  ];

  // map each page to a header
  const list = links.map((link, i) => {
    return (
      <NavList key={i}>
        <Link
          to={`/${link}`}
          onClick={() => handlePageChange(link)}>
          {link}
        </Link>
      </NavList>
    )
  })

  // set header background animation
  const { height, c } = useSpring({
    from: { height: 0, c: '#00000000' },
    to: { height: 50, c: color },
  });

  // set toggle animation
  const { transform, opacity } = useSpring({
    transform: dropDown ? "translate3d(0,0,0)" : "translate3d(-500px,0,0)",
    opacity: dropDown ? 1.0 : 0.0,
  });

  return (
    <>
      <HeaderBackground style={{ height, background: c}}>
        <HeaderContainer>
          <TitleLink
            to='/'
            onClick={() => {handlePageChange('home')}}>
            JP
          </TitleLink>
          <NavContainer>
            <NavContainer style={{ transform, opacity}}>
              {list}
            </NavContainer>
            <NameLogo onClick={() => setDropDown(!dropDown)}>
              <FaRegCaretSquareLeft />
            </NameLogo>
          </NavContainer>
        </HeaderContainer>
      </HeaderBackground>
    </>
  )
}
