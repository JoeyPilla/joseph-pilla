import React from 'react'
import PageContainer from './PageContainer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { THEME } from '../util';

export default function About({setColor, setCurrentPage}) {
  return (
    <PageContainer>
      <Title>About</Title>
      <P>
        Hey, I'm Joey.
      </P>
      <P>
        I'm an up-and-coming full stack Javascript developer specializing in React and Node. 
        I graduated from The Ohio State University in May of 2018 with a degree in Electrical and Computer Engineering, specializing in Computer Engineering.
      </P>
      <P>
      Since graduation I have become passionate about programming and have create multiple react 
      <A 
      to='/projects'
      onClick={() => {
        setCurrentPage('projects')
        setColor(THEME.projects.color)
      }
      }
      > projects </A> 
      in my free time and a few projects for work. 
      I have also begun to play around with React Native and iOS development. 
      Technologies that I am familiar with include: JavaScript, React.js, Node.js, Express.js, MongoDB, GraphQL, Next.js, React Router, React Spring, Styled Components, React Native, Git, HTML5, CSS3, C++, C, Java, Python, and MATLAB.
      </P>
      <P>
        Outside of work and programming, I love to 
        <A 
        to='/cooking'
        onClick={() => {
          setCurrentPage('cooking')
          setColor(THEME.cooking.color)
        }}> cook </A>
        and am trying to get my 
        <A 
        to='/cooking'
        onClick={() => {
          setCurrentPage('cooking')
          setColor(THEME.cooking.color)
        }}> cooking </A>
        portion of this website up and running. 
        The mountains are another passion of mine. 
        I love to both ski and snowboard as well as go hiking during the summer months.
      </P>
      <P>
        Please feel free to 
        <A 
          to='/contact'
          onClick={() => {
            setCurrentPage('contact')
            setColor(THEME.contact.color)
          }}> contact me </A>
        if you would like to chat or to discuss project opportunities.
      </P>
    </PageContainer >
  )
}

const A = styled(Link)`
  color: ${THEME.about.color};
  height: 100%;
  text-decoration: none;
`;

const P = styled.p`
  font-size: 1.5rem;
`

const Title = styled.h1`
  color: ${THEME.about.color+'aa'};
  height: 100%;
  text-decoration: none;
  padding-left: 50px;
  font-size: 2.5rem;
`;