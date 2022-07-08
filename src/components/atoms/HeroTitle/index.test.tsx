import React from 'react'

import { HeroTitle } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<HeroTitle />]', () => {
  const wrap = props => withThemeProvider(() => <HeroTitle {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
