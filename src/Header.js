import React, { Component } from 'react';
import styled from 'styled-components';
import { Spring, animated, Transition } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newHeaderColor: 'rgba(0,0,0,0)',
      clicked: 0,
      oldHeaderColor: 'rgba(0,0,0,0)',
    }
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(color) {
    const { newHeaderColor, clicked } = this.state;
    if (color !== newHeaderColor) {
      this.setState({
        newHeaderColor: color,
        oldHeaderColor: newHeaderColor,
        clicked: clicked+1,
      })
    }
  }

  render() {
    const { oldHeaderColor, newHeaderColor, clicked } = this.state;
    return (
      <>
      <Transition
        items={clicked}
        from={{ height: '0%', background: oldHeaderColor}}
        enter={{ height: '100%', background: newHeaderColor }}
      >
          {show => show && (styles => (
              <HeaderBackground
                height={styles.height }
                background={styles.background } 
              />
        ))}
      </Transition>
        <HeaderContainer
          newHeaderColor={newHeaderColor}
        >
          <H1 to='/'>JP</H1>
          <Nav>
            <Li color='#FFCC54'>
              <A to='/about' onClick={() => this.changeColor('#FFCC54')}>About</A>
            </Li>
            <Li color='#0DD269'>
              <A to='/Projects' onClick={() => this.changeColor('#0DD269')}>Projects</A>
            </Li>
            <Li color='#FF5F5F'>
              <A to='/Cooking' onClick={() => this.changeColor('#FF5F5F')}>Cooking</A>
            </Li>
            <Li color='#913CFF'>
              <A  to='contact' href='#Contact' onClick={() => this.changeColor('#913CFF')}>Contact</A>
            </Li>
          </Nav>
        </HeaderContainer>
        </>
    )
  }
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
`

const HeaderBackground = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  align-self: center;
  width: 100%;
  height: ${props => props.height};
  background: ${props => props.background};
`

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
`

const Nav = styled.nav`
display: flex;
height: 100%;
`

const Li = styled.li`
  @import url('https://fonts.googleapis.com/css?family=Oswald');
  font-family: Oswald;
  display: inline;
  transition: height 1s ease;
  padding: 22px 10px 21px;
  align-self: center;
  text-transform: uppercase;
`
const A = styled(Link)`
color: white;
  height: 100%;
text-decoration: none;
`