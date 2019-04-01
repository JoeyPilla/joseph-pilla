import React from 'react'
import PageContainer from './PageContainer';
import { Link, Text, Title } from '../Elements/textStyles';

export default function About({ handlePageChange }) {
  return (
    <PageContainer>
      <Title page={'about'}>About</Title>
      <Text>
        Hey, I'm Joey.
      </Text>
      <Text>
        I'm an up-and-coming full stack Javascript developer specializing in React and Node.
        I graduated from The Ohio State University in May of 2018 with a degree in Electrical
        and Computer Engineering, specializing in Computer Engineering.
      </Text>
      <Text>
        Since graduation I have become passionate about programming and have create 
        multiple react
        <Link
          page={'about'}
          to='/projects'
          onClick={() => { handlePageChange('projects') }}
        > projects </Link>
        in my free time and a few projects for work.
        I have also begun to play around with React Native and iOS development.
        Technologies that I am familiar with include: JavaScript, React.js, Node.js, 
        Express.js, MongoDB, GraphQL, Next.js, React Router, React Spring, Styled 
        Components React Native, Git, HTML5, CSS3, C++, C, Java, Python, and MATLAB.
      </Text>
      <Text>
        Outside of work and programming, I love to
        <Link
          page={'about'}
          to='/cooking'
          onClick={() => { handlePageChange('cooking') }}>
          cook </Link>
        and am trying to get my
        <Link
          page={"about"}
          to='/cooking'
          onClick={() => { handlePageChange('cooking') }}
        >  cooking </Link>
        portion of this website up and running.
        The mountains are another passion of mine.
        I love to both ski and snowboard as well as go hiking during the summer months.
      </Text>
      <Text>
        Please feel free to
        <Link
          page={"about"}
          to='/contact'
          onClick={() => { handlePageChange('contact') }}
        > contact me </Link>
        if you would like to chat or to discuss project opportunities.
      </Text>
    </PageContainer >
  )
}
