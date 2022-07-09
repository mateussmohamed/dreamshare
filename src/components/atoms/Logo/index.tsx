import React from 'react'

import styled from 'styled-components'

interface LogoProps {
  text?: string
  color?: string
  size?: number
  weight?: string
}

const LogoStyled = styled.a<LogoProps>`
  ${props => props.theme.typography.montserratStyle};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  text-transform: uppercase;
  color: ${props => props.color};
`

export const Logo = (props: LogoProps) => {
  const { text = 'Logo', color = '#fff', size = 20, weight = 'bold' } = props

  return (
    <LogoStyled color={color} size={size} weight={weight}>
      {text}
    </LogoStyled>
  )
}
