import React from 'react'

import { StepDescription } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<StepDescription />]', () => {
  const wrap = props => withThemeProvider(() => <StepDescription {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am description' })

    expect(wrapper).toMatchSnapshot()
  })
})
