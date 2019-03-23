import React from 'react'
import PageContainer from './PageContainer';
import { H1 } from '../Elements/headers';
import { THEME } from '../util';

export default function Projects() {
  return (
    <PageContainer>
      <H1 color={THEME.projects.color}>Projects</H1>
    </PageContainer>
  )
}
