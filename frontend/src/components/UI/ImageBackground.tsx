/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { FC } from 'react'
import styled from 'styled-components'

interface iProps {
  children?: any
  imagePath?: string
}

const Container = styled.div`
  height: 100vh;
  max-width: 100%;
`

const Image = styled.div<iProps>`
  background: url(${(props: iProps) => props.imagePath}) no-repeat center center fixed;
  background-size: cover;
  max-width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 923px) {
    background: url(${(props: iProps) => props.imagePath}) center center;
    background-size: cover;
    max-width: 100%;
    height: 100%;
    display: flex;
  }
`

const ImageBackground: FC<iProps> = ({ imagePath, children }) => {
  return (
    <Container>
      <Image imagePath={imagePath}>{children}</Image>
    </Container>
  )
}

export default ImageBackground
