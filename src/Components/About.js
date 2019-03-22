import React from 'react'
import PageContainer from './PageContainer';
import { H1 } from '../Elements/headers';
import { THEME } from '../util';

export default function About() {
  return (
    <PageContainer>
      <H1 color={THEME.about.color}>About</H1>
    </PageContainer >
  )
}
