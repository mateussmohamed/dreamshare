import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Row, HeroTitle, HeroDescription } from 'atoms'
import { Button } from 'molecules'
// import { Row, HeroTitle, HeroDescription, Button } from 'components'

const HeroSpotlightStyled = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: auto auto;
  text-align: center;
`

const HeroSpotlight = props => (
  <HeroSpotlightStyled>
    <HeroTitle>{props.title}</HeroTitle>
    <HeroDescription>{props.description}</HeroDescription>
    <Button secondary>Find your holliday partner</Button>
  </HeroSpotlightStyled>
)

HeroSpotlight.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default HeroSpotlight
