import React from 'react'
import styled from 'styled-components'

const HeroTitleStyled = styled.h1`
  ${props => props.theme.typography.montserratStyle};
  font-size: 52px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  margin: 0;

  @media only screen and (min-width: 320px) {
    font-size: 30px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 52px;
  }
`

const HeroTitle = props => (
  <HeroTitleStyled {...props}>{props.children}</HeroTitleStyled>
)

export default HeroTitle
