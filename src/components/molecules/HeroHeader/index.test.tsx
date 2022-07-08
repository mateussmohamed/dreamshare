import React from 'react'

import { HeroHeader } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<HeroHeader />]', () => {
  const wrap = props => withThemeProvider(() => <HeroHeader {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
