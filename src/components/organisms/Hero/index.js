import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from '@rebass/grid'

import { HeroImage, Container } from 'atoms'
import { HeroHeader, HeroSpotlight } from 'organisms'

const HeroContainer = styled(Flex)`
  width: 100%;
  height: 100vh;
  flex-direction: column;
`

const HeroContent = styled(Container)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Hero = props => (
  <HeroContainer>
    <HeroImage />
    <HeroContent>
      <HeroHeader />
      <HeroSpotlight title={props.title} description={props.description} />
    </HeroContent>
  </HeroContainer>
)

Hero.defaultProps = {
  title: 'Your Title',
  description: 'Your description',
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Hero
