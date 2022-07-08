import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

interface LogoProps {
  readonly size: number
  readonly weight: string
}

const LogoStyled = styled.a<LogoProps>`
  ${props => props.theme.typography.montserratStyle};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  text-transform: uppercase;
  color: ${props => props.color};
`

export const Logo = props => <LogoStyled {...props}>{props.text}</LogoStyled>

Logo.defaultProps = {
  text: 'Logo',
  color: '#fff',
  size: 20,
  weight: 'bold',
}

Logo.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  weight: PropTypes.string,
}
