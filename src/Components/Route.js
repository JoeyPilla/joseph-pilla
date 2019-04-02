import React, { useState } from 'react';
import {  Route as ReactRouterRoute} from 'react-router-dom';
import About from './About';

export default function Route({ title, children }) {
  return (
    <ReactRouterRoute
      exact
      path={`/${title}`}
      render={() => (children)}/>
  )
}


{/* <Route
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
        handlePageChange={handlePageChange} />)} /> */}
