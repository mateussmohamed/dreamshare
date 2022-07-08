import React from 'react'

import { Hero } from './index'

import withThemeProvider from '../../theme/withThemeProvider'
describe('[<Hero />]', () => {
  const wrap = props => withThemeProvider(() => <Hero {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
