import React from 'react'

import { SearchTitle } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<SearchTitle />]', () => {
  const wrap = props => withThemeProvider(() => <SearchTitle {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
