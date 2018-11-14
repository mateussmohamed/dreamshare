import React from 'react'
import styled from 'styled-components'

import { Row, Column, Logo, Button } from 'atoms'

const HeroHeaderContainer = styled(Row)`
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-left: 0;
  margin-right: 0;

  @media only screen and (min-width: 320px) {
    margin-top: 20px;
    flex-direction: column-reverse;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 40px;
  }
`

const HeroHeader = props => (
  <HeroHeaderContainer {...props}>
    <Column flex="none" mt={[100, 0, 0]}>
      <Logo text="DREAMSHARE" />
    </Column>
    <Column flex="none">
      <Button ghost>Login</Button>
      <Button>Sign Up</Button>
    </Column>
  </HeroHeaderContainer>
)

export default HeroHeader
