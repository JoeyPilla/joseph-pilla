import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Body from './Body';
import Contact from './Contact';
import Cooking from './Cooking';
import Projects from './Projects';

export default function Switch2({handlePageChange}) {
  return (
    <Switch>
      <Route
        exact
        path='/about'
        render={() => (
          <About
            handlePageChange={handlePageChange} />)} />
      <Route
        exact
        path='/projects'
        render={() => (
          <Projects
            handlePageChange={handlePageChange} />)} />
      <Route
        exact
        path='/cooking'
        render={() => (
          <Cooking
            handlePageChange={handlePageChange} />)} />
      <Route
        exact
        path='/contact'
        render={() => (
          <Contact
            handlePageChange={handlePageChange} />)} />
      <Route component={Body} />
    </Switch>
  )
}
