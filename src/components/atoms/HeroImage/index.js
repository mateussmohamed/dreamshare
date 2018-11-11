import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { position, size } from 'polished'

const getBackGround = ({ src }) => `
  linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
  url(${src})
`

const HeroImageStyled = styled.div`
  ${size('100%', '100%')};
  ${position('absolute', '0')};
  background-image: ${props => getBackGround(props)};
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  z-index: 0;
`

const HeroImage = props => <HeroImageStyled {...props} />

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
}

export default HeroImage
