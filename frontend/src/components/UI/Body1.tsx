/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { FC } from 'react'
import styled from 'styled-components'

interface iProps {
  fontFamily?: string
  children?: any
  marginVertical?: any
  marginHorizontal?: any
  paddingHorizontal?: any
  paddingVertical?: any
  center?: boolean
  right?: boolean
  opacity?: any
  color?: string
}

const StyledTitle = styled.div<iProps>`
  font-size: 20px;

  ${(props: any): any =>
    props.color &&
    `
      color: ${props.color};
    `}

  ${(props: any): any =>
    props.opacity &&
    `
      opacity: ${props.opacity};
    `}

  ${(props: any): any =>
    props.right &&
    `
      text-align: right;
    `}

  ${(props: any): any =>
    props.left &&
    `
      text-align: left;
    `}

  ${(props: any): any =>
    props.fontFamily &&
    `
      font-family: ${props.fontFamily};
    `}

  @media (max-width: 550px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
  }

  ${(props: any): any =>
    props.marginVertical &&
    `
      margin-top: ${props.marginVertical};
      margin-bottom: ${props.marginVertical};
    `}

  ${(props: any): any =>
    props.marginHorizontal &&
    `
      margin-left: ${props.marginHorizontal};
      margin-rigth: ${props.marginHorizontal};
    `}

  ${(props: any): any =>
    props.paddingVertical &&
    `
      padding-top: ${props.paddingVertical};
      padding-bottom: ${props.paddingVertical};
    `}

  ${(props: any): any =>
    props.paddingHorizontal &&
    `
      padding-left: ${props.paddingHorizontal};
      padding-rigth: ${props.paddingHorizontal};
    `}
`

const Body1: FC<iProps> = props => {
  const { children } = props
  return <StyledTitle {...props}>{children}</StyledTitle>
}

export default Body1
