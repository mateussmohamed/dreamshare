import React from 'react'
import styled from 'styled-components'

import { Container, Row, Column } from 'atoms'
import { Button } from 'molecules'

const Title = styled.h1`
  ${props => props.theme.typography.montserratStyle};
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.greyishBrown};
`

const SubTitle = styled.h4`
  ${props => props.theme.typography.robotoStyle};
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme.colors.brownishGrey};
`

const Input = styled.input`
  padding: 10px 15px;
  border-radius: 3px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border: 1px solid #d4d4d4;
  outline: 0;
  ${props => props.theme.typography.robotoStyle};
  font-size: 14px;
  @media only screen and (min-width: 320px) {
    margin: 15px 0;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 15px;
    min-width: 300px;
  }
`

const Form = styled.form`
  @media only screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

const ContainerStyled = styled(Container)`
  margin: 40px auto;
  @media only screen and (min-width: 1024px) {
    margin: 100px auto;
  }
`

const FlexColumn = styled(Column)`
  @media only screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const SearchPartners = () => (
  <ContainerStyled>
    <Row flexDirection="column" mx={0}>
      <FlexColumn width={[1, 1, 1]}>
        <Title>Crate your holiday activity</Title>
        <SubTitle>Hi! What are your holiday interests?</SubTitle>
        <Form>
          <Input placeholder="Enter your insterests" />
          <Button secondary>Search partners</Button>
        </Form>
      </FlexColumn>
    </Row>
  </ContainerStyled>
)

export default SearchPartners
