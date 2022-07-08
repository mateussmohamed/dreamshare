import React from 'react'

import { Footer } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Footer />]', () => {
  const wrap = props => withThemeProvider(() => <Footer {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
