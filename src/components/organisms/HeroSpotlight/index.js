import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Row, HeroTitle, HeroDescription } from 'atoms'
import { Button } from 'molecules'

const HeroSpotlightStyled = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  text-align: center;

  @media only screen and (min-width: 320px) {
    margin: 20px auto;
    padding: 0 20px;

    button {
      width: 100%;
    }
  }

  @media only screen and (min-width: 768px) {
    margin: auto auto;
    padding: 0;
    button {
      width: auto;
    }
  }
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
