import React from 'react'

import { DiscoverTitle } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<DiscoverTitle />]', () => {
  const wrap = props => withThemeProvider(() => <DiscoverTitle {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
