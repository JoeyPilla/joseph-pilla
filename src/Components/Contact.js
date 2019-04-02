import React from 'react'
import PageContainer from './PageContainer';
import {
  LinkA,
  Text,
  Title,
} from '../Elements/textStyles';

export default function Contact() {
  return (
    <PageContainer>
      <Title page={"contact"}>Contact</Title>
      <Text>
        Feel free to contact me through my email at
        <LinkA
          href='mailto:pilla.4@osu.edu'
          page={"contact"}
        > pilla.4@osu.edu</LinkA> or give me a call at
        <LinkA
          href='tel:+12169736536'
          page={"contact"}
        > 216-973-6536</LinkA>.
      </Text>
    </PageContainer>
  )
}
