import React from 'react'

import { StepBadge } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<StepBadge />]', () => {
  const wrap = props => withThemeProvider(() => <StepBadge {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am badge' })

    expect(wrapper).toMatchSnapshot()
  })
})
