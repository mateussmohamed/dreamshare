import React from 'react'

import styled from 'styled-components'

import { Row, HeroTitle, HeroDescription, Button } from '../../atoms'

const HeroSpotlightContainer = styled(Row)`
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

export const HeroSpotlight = () => (
  <HeroSpotlightContainer>
    <HeroTitle>SHARE YOUR HOLIDAY DREAM</HeroTitle>
    <HeroDescription>
      And find the perfect partner to fullfill it
    </HeroDescription>
    <Button secondary>Find your holliday partner</Button>
  </HeroSpotlightContainer>
)
