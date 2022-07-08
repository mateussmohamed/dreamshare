import React from 'react'

import { HeroHeader } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<HeroHeader />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <HeroHeader />)

    expect(wrapper).toMatchSnapshot()
  })
})
