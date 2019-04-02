import React from 'react'
import { FooterContainer } from '../Elements/containerStyles';
import {
  LinkA,
  List,
} from '../Elements/textStyles';

export default function Footer() {
  return (
    <FooterContainer>
      <nav>
        <List color='#3b5998'>
          <LinkA href='https://www.facebook.com/joey.pilla'>Facebook</LinkA>
        </List>
        <List color='#6cc644'>
          <LinkA href='https://github.com/JoeyPilla'>Github</LinkA>
        </List>
        <List color='#833AB4'>
          <LinkA href='https://www.instagram.com/joey_pilla6/'>Instagram</LinkA>
        </List>
      </nav>
    </FooterContainer>
  )
}
