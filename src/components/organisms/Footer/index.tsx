import React from 'react'

import styled from 'styled-components'
import { Flex } from '@rebass/grid'

import { Logo, Container, Row, Column } from '../../atoms'

const FooterStyled = styled.footer`
  padding: 40px 0 100px 0;
  border-top: 2px solid ${props => props.theme.colors.lightRed};

  @media only screen and (min-width: 320px) {
    padding: 20px 0;
  }

  @media only screen and (min-width: 768px) {
    padding: 40px 0;
  }
`

const TitleLinks = styled.h5`
  ${props => props.theme.typography.montserratStyle};
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 15px 0;

  @media only screen and (min-width: 320px) {
    margin: 0;
  }
  @media only screen and (min-width: 768px) {
    flex-basis: 100%;
  }
`

const ListLinks = styled.ul`
  margin: 0 20px 0 0;
  padding: 0;
  list-style-type: none;

  @media only screen and (min-width: 320px) {
    margin: 0;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    flex-basis: 50%;
  }
`

const ListItem = styled.li`
  ${props => props.theme.typography.robotoStyle};
  line-height: 1.86;
  font-size: 14px;
  min-width: 140px;
  a {
    color: ${props => props.theme.colors.brownGrey};
    text-decoration: none;
    :hover {
      color: ${props => props.theme.colors.brownishGrey};
    }
  }

  @media only screen and (min-width: 320px) {
    min-width: auto;
    margin-right: 15px;
  }
  @media only screen and (min-width: 768px) {
    flex: 0 1 50%;
    margin: 0;
  }
`

const ColumnOne = styled(Flex)`
  @media only screen and (min-width: 320px) {
    justify-content: center;
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 0px;
  }
`

const ColumnTwo = styled(Flex)`
  @media only screen and (min-width: 320px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const ColumnThree = styled(Flex)`
  flex-direction: column;
  @media only screen and (min-width: 320px) {
    align-items: center;
    margin-top: 35px;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 0;
    align-items: flex-end;
  }
`

export const Footer = () => (
  <FooterStyled>
    <Container>
      <Row flexDirection="row" flexWrap="wrap" mx={0}>
        <Column width={[1, 1 / 4, 1 / 3]} flex="none">
          <ColumnOne>
            <Logo color="#ff4e50" text="DREAMSHARE" weight="normal" size={16} />
          </ColumnOne>
        </Column>
        <Column width={[1, 1 / 2, 1 / 3]} flex="none">
          <ColumnTwo>
            <TitleLinks>Company</TitleLinks>
            <ListLinks>
              <ListItem>
                <a href="#">About</a>
              </ListItem>
              <ListItem>
                <a href="#">Contact</a>
              </ListItem>
              <ListItem>
                <a href="#">Press</a>
              </ListItem>
            </ListLinks>
            <ListLinks>
              <ListItem>
                <a href="#">Blog</a>
              </ListItem>
              <ListItem>
                <a href="#">Terms and Privacy</a>
              </ListItem>
              <ListItem>
                <a href="#">Help</a>
              </ListItem>
            </ListLinks>
          </ColumnTwo>
        </Column>
        <Column width={[1, 1 / 4, 1 / 3]} flex="none">
          <ColumnThree>
            <Logo color="#cccccc" text="DESIGN BY" size={10} />
            <Logo color="#ff4e50" text="ARETO" />
          </ColumnThree>
        </Column>
      </Row>
    </Container>
  </FooterStyled>
)
