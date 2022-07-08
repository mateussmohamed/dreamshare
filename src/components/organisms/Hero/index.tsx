import React from 'react'

import { HeroImage, HeroContainer, HeroContent } from '../../atoms'
import { HeroHeader, HeroSpotlight } from '../../molecules'

export const Hero = () => (
  <HeroContainer>
    <HeroImage />
    <HeroContent>
      <HeroHeader />
      <HeroSpotlight />
    </HeroContent>
  </HeroContainer>
)
