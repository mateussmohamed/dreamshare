import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DreamshareStepStyled = styled.article`
  width: auto;
  height: 400px;
  padding: 220px 25px 25px 25px;
  border-radius: 3px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6)
    ),
    url(${props => props.image});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
`

const BadgeStep = styled.span`
  padding: 3px 8px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.lightRed};
  ${props => props.theme.typography.montserratStyle};
  font-size: 12px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`

const Title = styled.h2`
  margin: 0;
  ${props => props.theme.typography.montserratStyle};
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`

const Description = styled.p`
  ${props => props.theme.typography.robotoStyle};
  font-size: 14px;
  color: ${props => props.theme.colors.veryLightPinkFour};
  margin: 0;
`

const DreamshareStep = props => (
  <DreamshareStepStyled {...props}>
    <BadgeStep>{props.badge}</BadgeStep>
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
  </DreamshareStepStyled>
)

DreamshareStep.propTypes = {
  badge: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default DreamshareStep
