import React from 'react'

import { HowDreamshare } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<HowDreamshare />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <HowDreamshare />)

    expect(wrapper).toMatchSnapshot()
  })
})
