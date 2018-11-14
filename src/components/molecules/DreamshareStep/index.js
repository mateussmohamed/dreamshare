import React from 'react'
import PropTypes from 'prop-types'

import {
  DreamshareStepCard,
  DreamshareStepTitle,
  DreamshareStepBadge,
  DreamshareStepDescription,
} from 'atoms'

const DreamshareStep = props => (
  <DreamshareStepCard {...props}>
    <DreamshareStepBadge>{props.badge}</DreamshareStepBadge>
    <DreamshareStepTitle>{props.title}</DreamshareStepTitle>
    <DreamshareStepDescription>{props.description}</DreamshareStepDescription>
  </DreamshareStepCard>
)

DreamshareStep.propTypes = {
  badge: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default DreamshareStep
