import React from 'react'
import styled from 'styled-components'
import { margin } from 'polished'

const HeroDescriptionStyled = styled.h4`
  ${margin('33px', '0')};
  ${props => props.theme.typography.robotoStyle};
  font-size: 24px;
  font-weight: 300;
  color: #f7f3f2;
`

const HeroDescription = props => (
  <HeroDescriptionStyled {...props}>{props.children}</HeroDescriptionStyled>
)

export default HeroDescription
