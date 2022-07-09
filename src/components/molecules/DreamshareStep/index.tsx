import React from 'react'

import { StepCard, StepTitle, StepBadge, StepDescription } from '../../atoms'

interface DreamshareStepProps {
  badge: string
  title: string
  description: string
  image: string
}

export const DreamshareStep = (props: DreamshareStepProps) => (
  <StepCard {...props}>
    <StepBadge>{props.badge}</StepBadge>
    <StepTitle>{props.title}</StepTitle>
    <StepDescription>{props.description}</StepDescription>
  </StepCard>
)
