import React from 'react'

// eslint-disable-next-line prettier/prettier
import {
  Home,
  Container,
  NavigationBar,
  Experience,
  Rooms,
  Booking,
  Contact
} from './components'

function App() {
  return (
    <Container>
      <NavigationBar />
      <Home />
      <Experience />
      <Rooms />
      <Booking />
      <Contact />
    </Container>
  )
}

export default App
