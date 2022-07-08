import React from 'react'

import { Logo } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Logo />]', () => {
  const wrap = props => withThemeProvider(() => <Logo {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
