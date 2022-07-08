import React from 'react'

import { DreamshareTitle } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<DreamshareTitle />]', () => {
  const wrap = props => withThemeProvider(() => <DreamshareTitle {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
