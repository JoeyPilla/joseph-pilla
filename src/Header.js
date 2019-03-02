import React, { Component } from 'react';
import styled from 'styled-components';

export default class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <H1>JP</H1>
        <Nav>
          <Li><A href='#'>About</A></Li>
          <Li><A href='#'>Projects</A></Li>
          <Li><A href='#'>Cooking</A></Li>
          <Li><A href='#'>Contact</A></Li>
        </Nav>

      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-content: center;
padding: 20px;
  grid-area: 1 / 1 / 2 / -1;
`
const H1 = styled.h1`
 margin:0px;
 font-size: 3rem;
 cursor: pointer;
`

const Nav = styled.nav`
display: flex;
  align-content: center;
`

const Li = styled.li`
  display: inline;
  padding: 10px;
`
const A = styled.a`
color: white;
text-decoration: none;
`