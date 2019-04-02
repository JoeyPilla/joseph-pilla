import React from 'react';
import {
  useSpring,
} from 'react-spring';
import background from '../background.jpg';
import {
  BackgroundImage,
  Overlay,
} from '../Elements/backgroundStyles';

export default function Background({ currentPage }) {
  const home = currentPage === 'home'; // check if home

  //set styles with react spring
  const { backgroundColor, opacity } = useSpring({
    backgroundColor: home ? 'black' : '#1A1A1A',
    opacity: home ? 0.7 : 1.0,
  });

  return (
    <>
      <BackgroundImage
        src={background}
        page={currentPage}
      />
      <Overlay style={{
        backgroundColor,
        opacity,
      }}/>
    </>
  )
}
