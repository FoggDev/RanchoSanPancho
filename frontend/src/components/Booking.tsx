/* eslint-disable max-len */
import React from 'react'
import styled from 'styled-components'

import BookingBg from '../assets/images/booking-bg.webp'
import { Body1, ImageBackground, LargeTitle, Button } from './UI'

const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  padding: 4rem 15rem 4rem 15rem;
  width: 100%;

  @media (max-width: 923px) {
    padding: 3rem;
  }
`
const ModalContainer = styled.div`
  text-align: center;
  border-radius: 10px;
  background: #252525;
  padding: 2rem;
  width: 100%;

  @media (max-width: 923px) {
    padding: 1rem;
  }
`
const Form = styled.div`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`

const Booking = () => {
  return (
    <ImageBackground imagePath={BookingBg}>
      <Container>
        <LargeTitle marginVertical="1rem">RESERVA AHORA</LargeTitle>
        <ModalContainer>
          <Body1 fontFamily="butler" marginVertical="0.5rem">
            A continuación, te solicitamos datos importantes para realizar tu reserva de manera
            efectiva.
          </Body1>
          <Form>
            <Body1 fontFamily="butler" marginHorizontal="0.5rem">
              Nombre y Apellido
            </Body1>
            <Body1 fontFamily="butler" marginHorizontal="0.5rem">
              llegada
            </Body1>
            <Body1 fontFamily="butler" marginHorizontal="0.5rem">
              salida
            </Body1>
            <Body1 fontFamily="butler" marginHorizontal="0.5rem">
              Huespedes
            </Body1>
          </Form>
        </ModalContainer>
        <Button outline marginVertical="2rem">
          CREAR RESERVACIÓN
        </Button>
      </Container>
    </ImageBackground>
  )
}

export default Booking
