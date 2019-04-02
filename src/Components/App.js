import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Background from './Background';
import Footer from './Footer';
import Header from './Header';
import Switch from './Switch';
import { AppContainer } from '../Elements/containerStyles';
import {
  THEME,
  getStartingPage,
} from '../util';

export default function App() {
  const page = getStartingPage(window.location.href) // grab the current page

  const [color, setColor] = useState(THEME[page].color);
  const [currentPage, setCurrentPage] = useState(page);

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
          handlePageChange={handlePageChange}/>
        <Switch handlePageChange={handlePageChange}/>
        <Footer />
        <Background currentPage={currentPage}/>
      </AppContainer>
    </Router>
  );
}
