/* eslint-disable max-len */
import React, { useState, FC } from 'react'
import styled from 'styled-components'

import logo from '../assets/icons/logo.webp'

interface iMenuItems {
  display?: boolean
}

const Nav = styled.div`
  justify-content: space-between;
  align-items: center;
  position: fixed;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
`

const LogoImg = styled.img`
  height: 10rem;
  width: 10rem;
`

const Hamburger = styled.div`
  z-index: 10;
  flex-direction: column;
  cursor: pointer;
  padding: 3rem;
  display: none;

  span {
    height: 4px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
  }

  @media (max-width: 923px) {
    display: flex;
  }
`

const Menu = styled.ul<iMenuItems>`
  display: flex;
  flex-flow: row nowrap;
  padding-right: 3rem;

  li {
    padding: 18px 25px;
  }

  @media (max-width: 923px) {
    background-color: black;
    transform: ${(props: iMenuItems) => (props.display ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in;
    flex-flow: column wrap;
    padding-top: 10rem;
    position: fixed;
    height: 100vh;
    width: 100%;
    right: 0;
    top: 0;
    font-size: 28px;
  }

  li:hover {
    color: #928889;
  }
`

// eslint-disable-next-line react/prop-types
const MenuItems: FC<iMenuItems> = ({ display }) => {
  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Menu display={display}>
        <li>HOME</li>
        <li>EXPERIENCIA</li>
        <li>HABITACIONES</li>
        <li>RESERVA</li>
        <li>CONTACTO</li>
      </Menu>
    </>
  )
}

const NavigationBar = () => {
  const [isToggled, setIsToggled] = useState(false)
  const handleClick = () => {
    setIsToggled(!isToggled)
  }

  return (
    <Nav>
      <div>
        <LogoImg src={logo} alt="logo" />
      </div>
      <Hamburger onClick={handleClick}>
        <span />
        <span />
        <span />
      </Hamburger>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <MenuItems display={isToggled} />
    </Nav>
  )
}

export default NavigationBar
