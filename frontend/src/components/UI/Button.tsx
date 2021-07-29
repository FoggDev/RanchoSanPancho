/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { FC } from 'react'
import styled from 'styled-components'

interface iProps {
  children?: string
  onPress?: void
  outline?: boolean
  marginVertical?: any
  marginHorizontal?: any
}

const Button = styled.button<iProps>`
  background-color: #867c7d;
  display: inline-block;
  text-decoration: none;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  border: none;
  color: white;

  ${(props: any): any =>
    props.outline &&
    `
    background-color: transparent;
    padding: 13px 32px;
    border: 2px solid white;
    `}
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
`

const UIButton: FC<iProps> = props => {
  const { children, onPress } = props
  return (
    <Button {...props} onClick={onPress}>
      {children}
    </Button>
  )
}

export default UIButton
