import React from 'react'

import { HowDreamshare } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<HowDreamshare />]', () => {
  const wrap = props => withThemeProvider(() => <HowDreamshare {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
