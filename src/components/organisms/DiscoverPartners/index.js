import React from 'react'
import styled from 'styled-components'

import { Container, Row, Column } from 'atoms'
import { Button, Partner } from 'molecules'

const Title = styled.h1`
  ${props => props.theme.typography.montserratStyle};
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.greyishBrown};
`

const FlexColumn = styled(Column)`
  @media only screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Partners = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const DiscoverPartners = () => (
  <Container m={['20px auto', '40px auto', '100px auto']}>
    <Row justifyContent="center" mb={50}>
      <Title>Meet a partner for your best holiday</Title>
    </Row>
    <Row flexDirection="column" mx={0}>
      <FlexColumn width={[1, 1, 1]}>
        <Partners>
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
              name="Bradley Hunter"
              avatar="/assets/images/partner-2.jpg"
              bio="Based in Chicago. I love playing tennis and loud music."
              icon="/assets/icons/brush.svg"
            />
          </Column>
          <Column width={[1, 1 / 2, 1 / 4]} flex="none">
            <Partner
              name="Bradley Hunter"
              avatar="/assets/images/partner-3.jpg"
              bio="Based in Chicago. I love playing tennis and loud music."
              icon="/assets/icons/camera.svg"
            />
          </Column>
          <Column width={[1, 1 / 2, 1 / 4]} flex="none">
            <Partner
              name="Bradley Hunter"
              avatar="/assets/images/partner-4.jpg"
              bio="Based in Chicago. I love playing tennis and loud music."
              icon="/assets/icons/airplane.svg"
            />
          </Column>
        </Partners>
      </FlexColumn>
    </Row>
    <Row justifyContent="center" mt={50}>
      <Button primary>See other partners</Button>
    </Row>
  </Container>
)

export default DiscoverPartners
