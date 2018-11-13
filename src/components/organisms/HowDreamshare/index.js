import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container, Row, Column } from 'atoms'
import { DreamshareStep } from 'molecules'

const ContainerStyled = styled(Container)`
  padding: 100px 0;
`

const Title = styled.h1`
  ${props => props.theme.typography.montserratStyle};
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.theme.colors.greyishBrown};
  margin-bottom: 35px;
  text-align: center;
`

const HowDreamshare = () => (
  <ContainerStyled>
    <Title>How Dreamshare</Title>
    <Row flexWrap="wrap">
      <Column flex="1 1 0">
        <DreamshareStep
          badge="Step 1"
          title="Sed leo enim, condimentum"
          description="Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
          image="/assets/images/planing-trip.jpg"
        />
      </Column>
      <Column flex="1 1 0">
        <DreamshareStep
          badge="Step 2"
          title="Morbi velit risus"
          description="Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
          image="/assets/images/road-trip.jpg"
        />
      </Column>
      <Column flex="1 1 0">
        <DreamshareStep
          badge="Step 3"
          title="Sed leo enim, condimentum"
          description="Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
          image="/assets/images/join-trip.jpg"
        />
      </Column>
    </Row>
  </ContainerStyled>
)

// HowDreamshare.propTypes = {}

export default HowDreamshare
