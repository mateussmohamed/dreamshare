import React from 'react'

import { Container, Row, Column, DreamshareTitle } from 'atoms'
import { DreamshareStep } from 'molecules'

const HowDreamshare = () => (
  <Container>
    <DreamshareTitle>How Dreamshare</DreamshareTitle>
    <Row flexWrap="wrap" mx={0}>
      <Column width={[1, 1 / 3, 1 / 3]} flex="none">
        <DreamshareStep
          badge="Step 1"
          title="Sed leo enim, condimentum"
          description="Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
          image="/assets/images/planing-trip.jpg"
        />
      </Column>
      <Column width={[1, 1 / 3, 1 / 3]} flex="none">
        <DreamshareStep
          badge="Step 2"
          title="Morbi velit risus"
          description="Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
          image="/assets/images/road-trip.jpg"
        />
      </Column>
      <Column width={[1, 1 / 3, 1 / 3]} flex="none">
        <DreamshareStep
          badge="Step 3"
          title="Sed leo enim, condimentum"
          description="Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
          image="/assets/images/join-trip.jpg"
        />
      </Column>
    </Row>
  </Container>
)

export default HowDreamshare
