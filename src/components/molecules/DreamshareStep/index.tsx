import React from 'react'

import PropTypes from 'prop-types'

import { StepCard, StepTitle, StepBadge, StepDescription } from '../../atoms'

export const DreamshareStep = props => (
  <StepCard {...props}>
    <StepBadge>{props.badge}</StepBadge>
    <StepTitle>{props.title}</StepTitle>
    <StepDescription>{props.description}</StepDescription>
  </StepCard>
)

DreamshareStep.propTypes = {
  badge: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
