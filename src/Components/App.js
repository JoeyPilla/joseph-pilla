import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSpring } from 'react-spring';
import About from './About';
import Body from './Body';
import Contact from './Contact';
import Cooking from './Cooking';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import background from '../background.jpg';
import { AppContainer } from '../Elements/containerStyles';
import {
  Background,
  BackgroundBlack,
  Overlay,
} from '../Elements/backgroundStyles';
import { THEME } from '../util';

export default function App() {
  const page = 'home';
  const themeColor  = THEME[page] ? THEME[page].color : THEME.home.color;

  const [color, setColor]             = useState(themeColor);
  const [currentPage, setCurrentPage] = useState(page);

  const props = useSpring({
    from:   { opacity: 0 },
    to:     { opacity: 1 },
    reset:  true,
  });

  function handlePageChange(page) {
    setCurrentPage(page);
    setColor(THEME[page].color);
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContainer>
        <Header
          color={color}
          currentPage={currentPage}
          handlePageChange={handlePageChange}/>/>
        <Switch>
          <Route
            exact
            path='/about'
            render={() => (
              <About
                handlePageChange={handlePageChange}/>)}/>
          <Route
            exact
            path='/projects'
            render={() => (
              <Projects
                handlePageChange={handlePageChange}/>)}/>
          <Route
            exact
            path='/cooking'
            render={() => (
              <Cooking
                handlePageChange={handlePageChange}/>)}/>
          <Route
            exact
            path='/contact'
            render={() => (
              <Contact
                handlePageChange={handlePageChange}/>)}/>
          <Route component={Body} />
        </Switch>
        <Footer />
        {
          currentPage === 'home'
            ? <>
                <Background
                  src={background}
                  page={currentPage}
                  style={props} />
                <Overlay />
              </>
            : <BackgroundBlack/>

        }
      </AppContainer>
    </Router>
  );
}
