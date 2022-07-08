import React from 'react'

import styled from 'styled-components'

import {
  Container,
  Row,
  Column,
  Form,
  Input,
  Button,
  SearchTitle,
  SearchDescription,
} from '../../atoms'

const RowStyled = styled(Row)`
  @media only screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const SearchPartners = () => (
  <Container my={[40, 90]}>
    <RowStyled flexDirection="column" mx={0}>
      <Column>
        <SearchTitle>Crate your holiday activity</SearchTitle>
        <SearchDescription>
          Hi! What are your holiday interests?
        </SearchDescription>
        <Form>
          <Input placeholder="Enter your interests" />
          <Button secondary>Search partners</Button>
        </Form>
      </Column>
    </RowStyled>
  </Container>
)
