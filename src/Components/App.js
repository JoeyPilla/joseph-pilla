import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Body from './Body';
import About from './About';
import Footer from './Footer';
import background from '../background.jpg';
import Projects from './Projects';
import Cooking from './Cooking';
import Contact from './Contact';
import { THEME } from '../util';

export default function App() {
  const url = window.location.href;
  const splitUrl = url.split('/');
  const page = splitUrl[splitUrl.length - 1].toLowerCase();
  const themeColor = THEME[page] ? THEME[page].color : THEME.home.color;
  const [color, setColor] = useState(themeColor);
  const [currentPage, setCurrentPage] = useState(page);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContainer>
        <Header
          color={color}
          currentPage={currentPage}
          setColor={setColor}
          setCurrentPage={setCurrentPage}/>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/cooking' component={Cooking} />
          <Route exact path='/contact' component={Contact} />
          <Route component={Body} />
        </Switch>
        <Footer />
        <Background src={background} />
        <Overlay />
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  display: grid;
  color: white;
  grid-template: 50px 1fr 50px / auto;
  height: 100vh;
  width: 100vw;
`;

const Background = styled.img`
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  width: 100%;
  filter: contrast(1);
  z-index: -2;
  object-fit: cover;
`;

const Overlay = styled.div`
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  width: 100%;
  opacity: .7;
  background-color: black;
  z-index: -1;
`;
