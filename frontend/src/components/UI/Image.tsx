/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { FC } from 'react'
import styled from 'styled-components'

interface iProps {
  children?: any
  imagePath?: string
  imageMobilePath?: string
  resizeMode?: string
  width?: string
  height?: string
}

const Container = styled.div<iProps>`
  background: url(${(props: iProps) => props.imagePath}) no-repeat center center;
  background-size: cover;
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 923px) {
    background: url(${(props: iProps) => props.imagePath}) center center;
    background-size: cover;
    display: flex;
    height: 100%;
    width: 100%;
  }

  ${(props: iProps) =>
    props.resizeMode &&
    `
      background-size: ${props.resizeMode};
    `}

  ${(props: iProps) =>
    props.height &&
    `
      height: ${props.height};
    `}

${(props: iProps) =>
    props.width &&
    `
      width: ${props.width};
    `}
`

const Image: FC<iProps> = ({ imagePath, children }) => {
  return <Container imagePath={imagePath}>{children}</Container>
}

export default Image
