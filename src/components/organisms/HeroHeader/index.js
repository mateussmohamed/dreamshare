import React from 'react'
import styled from 'styled-components'

import { Row, Column, Logo } from 'atoms'
import { Button } from 'molecules'

const HeroHeaderStyled = styled(Row)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  position: relative;
  z-index: 2;
`

const HeroHeader = props => (
  <HeroHeaderStyled {...props}>
    <Column flex="none">
      <Logo text="Dreamshare" />
    </Column>
    <Column flex="none">
      <Button ghost>Login</Button>
      <Button>Sign Up</Button>
    </Column>
  </HeroHeaderStyled>
)

export default HeroHeader
