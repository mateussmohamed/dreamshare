import React from 'react'

import styled from 'styled-components'

const HeroDescriptionStyled = styled.h4`
  ${props => props.theme.typography.robotoStyle};
  color: ${props => props.theme.colors.veryLightPink};
  font-size: 24px;
  font-weight: 300;

  @media only screen and (min-width: 320px) {
    font-size: 18px;
    margin: 20px 0;
  }

  @media only screen and (min-width: 768px) {
    margin: 30px 0;
    font-size: 24px;
  }
`

export const HeroDescription = props => (
  <HeroDescriptionStyled {...props}>{props.children}</HeroDescriptionStyled>
)
