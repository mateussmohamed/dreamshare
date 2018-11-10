import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { em } from 'polished'

const LogoStyled = styled.a`
  ${props => props.theme.typography.montserratStyle};
  font-size: ${props => em(props.size)};
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => props.color};
`

const Logo = props => <LogoStyled {...props}>{props.text}</LogoStyled>

Logo.defaultProps = {
  text: 'Logo',
  color: '#fff',
  size: 20,
}

Logo.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}

export default Logo
