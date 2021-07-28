/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

import { ImageBackground, LargeTitle, Button } from './UI'
import HomeBG from '../assets/images/home-bg.webp'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10rem 0rem 4rem 10rem;

  @media (max-width: 923px) {
    padding: 10rem 0rem 0rem 0rem;
  }
`
const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding: 4rem;
`

const Item = styled.div`
  width: 100%;
  align-self: center;
`
const ButtonWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
`

const ButtonSpacer = styled.div`
  padding: 2rem 2rem 2rem 0rem;

  @media (max-width: 650px) {
    padding: 0.5rem 0.5rem 0.5rem 0rem;
  }
`

const Home = () => {
  return (
    <ImageBackground imagePath={HomeBG}>
      <Container>
        <Content>
          <Item>
            <LargeTitle marginVertical="1rem">
              Descansar en nuestras Cabañas
              <br /> Te harán sentir como en casa.
            </LargeTitle>
            <ButtonWrapper>
              <ButtonSpacer>
                <Button outline>CONOCER MAS</Button>
              </ButtonSpacer>
              <ButtonSpacer>
                <Button>RESERVAR AHORA</Button>
              </ButtonSpacer>
            </ButtonWrapper>
          </Item>
        </Content>
      </Container>
    </ImageBackground>
  )
}

export default Home
