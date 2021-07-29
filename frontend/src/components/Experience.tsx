/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

import ExperienceBg from '../assets/images/experience-bg.webp'
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
`

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 923px) {
    text-align: right;
  }
`
const Bottom = styled.div`
  align-self: flex-end;
`
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

  @media (min-width: 923px) {
    align-content: flex-end;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;

  @media (max-width: 923px) {
    display: none;
  }
`

const Experience = () => {
  return (
    <ImageBackground imagePath={ExperienceBg}>
      <Container>
        <Content>
          <ButtonsContainer>
            <Bottom>
              <div>Buttons</div>
            </Bottom>
          </ButtonsContainer>
          <ItemContainer>
            <TitleWrapper>
              <H1 marginVertical="0.5rem">
                Disfruta de increibles amaneceres e inolvidables atardeceres
              </H1>
            </TitleWrapper>
            <BodyWrapper>
              <Bottom>
                <Body1 fontFamily="butler" color="#CCCCCC">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  nostrud nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </Body1>
              </Bottom>
            </BodyWrapper>
          </ItemContainer>
        </Content>
      </Container>
    </ImageBackground>
  )
}

export default Experience
