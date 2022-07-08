import React from 'react'

import { Layout } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Layout />]', () => {
  const wrap = props => withThemeProvider(() => <Layout {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: '' })

    expect(wrapper).toMatchSnapshot()
  })
})
