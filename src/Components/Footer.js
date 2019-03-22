import React from 'react'
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <nav>
        <Li color='#3b5998'>
          <A href='https://www.facebook.com/joey.pilla'>Facebook</A>
        </Li>
        <Li color='#6cc644'>
          <A href='https://github.com/JoeyPilla'>Github</A>
        </Li>
        <Li color='#833AB4'>
          <A href='https://www.instagram.com/joey_pilla6/'>Instagram</A>
        </Li>
      </nav>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  grid-area: 3 / 1 / 4 / -1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
`;

const Li = styled.li`
  background: ${props => props.color};
  display: inline;
  padding: 10px;
`;

const A = styled.a`
color: white;
text-decoration: none;
`;
