import React from 'react'

import { StepCard } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<StepCard />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => (
      <StepCard image="src/dsds">I am a card</StepCard>
    ))

    expect(wrapper).toMatchSnapshot()
  })
})
