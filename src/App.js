import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import background from './background.png';
class App extends Component {
  render() {
    return (
      <>
        <AppContainer>
          <Header />
          <Body />
          <Footer />
          <Background src={background} />
          <Overlay/>
        </AppContainer>
      </>
    );
  }
}

const AppContainer = styled.div`
display: grid;
color: white;
grid-template: 75px 1fr 100px / auto;
  height: 100vh;
  width: 100vw;
`

const Background = styled.img`
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  width: 100%;
  filter: grayscale(1);
  filter: contrast(1);
  z-index: -2;
`
const Overlay = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  width: 100%;
  opacity: .7;
background-color: black;
  z-index: -1;
`
export default App;
