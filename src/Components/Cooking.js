import React from 'react'
import PageContainer from './PageContainer';
import { H1 } from '../Elements/headers';
import { THEME } from '../util';

export default function Cooking() {
  return (
    <PageContainer>
      <H1 color={THEME.cooking.color}>Cooking</H1>
    </PageContainer >
  )
}
