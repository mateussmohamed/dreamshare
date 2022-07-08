import React from 'react'

import { HeroDescription } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<HeroDescription />]', () => {
  const wrap = props => withThemeProvider(() => <HeroDescription {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a description' })

    expect(wrapper).toMatchSnapshot()
  })
})
