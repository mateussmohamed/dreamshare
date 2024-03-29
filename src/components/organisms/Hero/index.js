import React from 'react'

import { HeroImage, HeroContainer, HeroContent } from 'atoms'
import { HeroHeader, HeroSpotlight } from 'molecules'

const Hero = () => (
  <HeroContainer>
    <HeroImage />
    <HeroContent>
      <HeroHeader />
      <HeroSpotlight />
    </HeroContent>
  </HeroContainer>
)

export default Hero
