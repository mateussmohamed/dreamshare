import React from 'react'
import styled from 'styled-components'

import { Container, Row, Column, Button, DiscoverTitle } from 'atoms'
import { Partner } from 'molecules'

const RowStyled = styled(Row)`
  @media only screen and (min-width: 320px) {
    flex-direction: column;
    justify-content: center;
  }
`

const PartnersSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ButtonStyled = styled(Button)`
  @media only screen and (min-width: 320px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: auto;
  }
`

const DiscoverPartners = () => (
  <Container m={['20px auto', '40px auto', '100px auto']}>
    <Row justifyContent="center" mb={[10, 50, 50]}>
      <DiscoverTitle>Meet a partner for your best holiday</DiscoverTitle>
    </Row>
    <Row flexDirection="column" mx={0}>
      <RowStyled flex="none">
        <PartnersSection>
          <Column width={[1, 1 / 2, 1 / 4]} flex="none">
            <Partner
              name="Bradley Hunter"
              bio="Based in Chicago. I love playing tennis and loud music."
              avatar="/assets/images/partner-1.jpg"
              icon="/assets/icons/music.svg"
            />
          </Column>
          <Column width={[1, 1 / 2, 1 / 4]} flex="none">
            <Partner
              name="Marie Bennett"
              avatar="/assets/images/partner-2.jpg"
              bio="Currently living in Colorado. Lover of art, languages and travelling."
              icon="/assets/icons/brush.svg"
            />
          </Column>
          <Column width={[1, 1 / 2, 1 / 4]} flex="none">
            <Partner
              name="Diana Wells"
              avatar="/assets/images/partner-3.jpg"
              bio="Living in Athens, Greece. I love black and white classics, chillout music and green tea."
              icon="/assets/icons/camera.svg"
            />
          </Column>
          <Column width={[1, 1 / 2, 1 / 4]} flex="none">
            <Partner
              name="Christopher Pierce"
              avatar="/assets/images/partner-4.jpg"
              bio="Star Wars fanatic. I have a persistent enthusiasm to create new things."
              icon="/assets/icons/airplane.svg"
            />
          </Column>
        </PartnersSection>
      </RowStyled>
    </Row>
    <Row justifyContent="center" mt={[0, 20, 50]} px={[25, 0, 0]}>
      <ButtonStyled primary>See other partnersSection</ButtonStyled>
    </Row>
  </Container>
)

export default DiscoverPartners
