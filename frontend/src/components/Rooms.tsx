/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

import RoomsBg from '../assets/images/rooms-bg.webp'
import { ImageBackground, H1, Body1 } from './UI'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10rem 0rem 4rem 10rem;

  @media (max-width: 923px) {
    padding: 10rem 0rem 0rem 0rem;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 3rem;
`

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 923px) {
    text-align: right;
  }
`

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 923px) {
    text-align: left;
  }
`
const Bottom = styled.div`
  align-self: flex-end;
`
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 923px) {
    align-self: flex-start;
    flex-direction: column-reverse;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  height: 100%;
  width: 50%;

  @media (max-width: 923px) {
    display: none;
  }
`

const Rooms = () => {
  return (
    <ImageBackground imagePath={RoomsBg}>
      <Container>
        <Content>
          <ItemContainer>
            <BodyWrapper>
              <Body1 fontFamily="butler" color="#CCCCCC">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                nostrud nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </Body1>
            </BodyWrapper>
            <TitleWrapper>
              <Bottom>
                <H1 marginVertical="0.5rem">Habitaciones que te harán sentir como en casa</H1>
              </Bottom>
            </TitleWrapper>
          </ItemContainer>
          <ButtonsContainer>
            <Bottom>
              <div>Buttons</div>
            </Bottom>
          </ButtonsContainer>
        </Content>
      </Container>
    </ImageBackground>
  )
}

export default Rooms
