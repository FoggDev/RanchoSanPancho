/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

import ContactBg from '../assets/images/contact-bg.webp'
import { Image, LargeTitle, Body1 } from './UI'

const Container = styled.div`
  background: #252525;
  width: 100%;
  height: 100vh;
`
const Content = styled.div`
  display: flex;

  @media (max-width: 923px) {
    flex-direction: column;
  }
`

const Item = styled.div`
  justify-content: center;
  display: flex;
  height: 100vh;
  width: 50%;

  @media (max-width: 923px) {
    width: 100%;
    height: 50vh;
  }
`

const ContactBox = styled.div`
  align-self: center;
  justify-content: center;
  text-align: center;
`
const Line = styled.div`
  display: inline-block;
  background: white;
  width: 8rem;
  height: 2px;
`

const Contact = () => {
  return (
    <Container>
      <Content>
        <Item>
          <Image imagePath={ContactBg} />
        </Item>
        <Item>
          <ContactBox>
            <LargeTitle>CONTACTO</LargeTitle>
            <Line />
            <Body1 marginVertical="1rem">CabanasSanPancho@gmail.com</Body1>
            <Body1 marginVertical="1rem">+1 415-307-2483</Body1>
            <Body1 marginVertical="1rem">COLIMA, MEX</Body1>
          </ContactBox>
        </Item>
      </Content>
    </Container>
  )
}

export default Contact
