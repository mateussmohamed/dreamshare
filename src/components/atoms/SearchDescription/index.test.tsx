import React from 'react'

import { SearchDescription } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<SearchDescription />]', () => {
  const wrap = props =>
    withThemeProvider(() => <SearchDescription {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a description' })

    expect(wrapper).toMatchSnapshot()
  })
})
