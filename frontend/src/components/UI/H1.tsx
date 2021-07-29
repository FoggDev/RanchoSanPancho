/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { FC } from 'react'
import styled from 'styled-components'

interface iProps {
  fontName?: string
  children?: any
  marginVertical?: any
  marginHorizontal?: any
  paddingHorizontal?: any
  paddingVertical?: any
  center?: boolean
  right?: boolean
}

const StyledTitle = styled.div<iProps>`
  font-size: 30px;

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
    props.fontName &&
    `
      font-family: ${props.fontName}
    `}

  @media (max-width: 550px) {
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 30px;
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

const H1: FC<iProps> = props => {
  const { children } = props
  return <StyledTitle {...props}>{children}</StyledTitle>
}

export default H1
