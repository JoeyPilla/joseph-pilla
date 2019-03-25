import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
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

  const props = useSpring({
    from:{ opacity: 0 },
    to:  { opacity: 1 },
    reset: true,
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContainer>
        <Header
          color={color}
          currentPage={currentPage}
          setColor={setColor}
          setCurrentPage={setCurrentPage}/>
        <Switch>
          <Route 
            exact 
            path='/about' 
            render={() => (
              <About 
                setColor={setColor}
                setCurrentPage={setCurrentPage}/>)}/>
          <Route 
            exact 
            path='/projects' 
            render={() => (
              <Projects
                setColor={setColor}
                setCurrentPage={setCurrentPage}/>)}/>
          <Route 
            exact 
            path='/cooking' 
            render={() => (
              <Cooking 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>)}/>
          <Route 
            exact 
            path='/contact' 
            render={() => (
              <Contact
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}/>)}/>
          <Route component={Body} />
        </Switch>
        <Footer />
        {
          currentPage === ''
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

const AppContainer = styled.div`
  display: grid;
  color: white;
  grid-template: 50px 1fr 50px / auto;
  height: 100vh;
  width: 100vw;
`;

const Background = styled(animated.img)`
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  width: 100%;
  filter: contrast(1);
  z-index: -2;
  object-fit: cover;
`;
const BackgroundBlack = styled(animated.div)`
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  width: 100%;
  background-color: black;
  z-index: -1;
  opacity: .9;
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
