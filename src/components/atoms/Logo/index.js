import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LogoStyled = styled.a`
  ${props => props.theme.typography.montserratStyle};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  text-transform: uppercase;
  color: ${props => props.color};
`

const Logo = props => <LogoStyled {...props}>{props.text}</LogoStyled>

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

export default Logo
