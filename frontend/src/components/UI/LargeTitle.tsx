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
}

const StyledTitle = styled.div<iProps>`
  font-size: 40px;

  ${(props: any): any =>
    props.fontName &&
    `
      font-family: ${props.fontName}
    `}

  @media (max-width: 550px) {
    font-size: 35px;
  }
  @media (min-width: 1024px) {
    font-size: 40px;
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

const LargeTitle: FC<iProps> = props => {
  const { children } = props
  return <StyledTitle {...props}>{children}</StyledTitle>
}

export default LargeTitle
