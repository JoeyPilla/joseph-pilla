import React from 'react'
import PageContainer from './PageContainer';
import { H1 } from '../Elements/headers';
import styled from 'styled-components';
import { THEME } from '../util';;
export default function Contact() {
  return (
    <PageContainer>
      <P>
        Feel free to contact me through my email at <A href='mailto:pilla.4@osu.edu'>pilla.4@osu.edu</A> or give me a call at <A href='tel:+12169736536'>216-973-6536</A>.
      </P>
    </PageContainer>
  )
}

const A = styled.a`
  color: ${THEME.contact.color};
  height: 100%;
  text-decoration: none;
`;

const P = styled.p`
  font-size: 3rem;
  text-align: center;
`;