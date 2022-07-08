import React from 'react'

import { StepTitle } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<StepTitle />]', () => {
  const wrap = props => withThemeProvider(() => <StepTitle {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
