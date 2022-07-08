import React from 'react'

import { DiscoverPartners } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<DiscoverPartners />]', () => {
  const wrap = props => withThemeProvider(() => <DiscoverPartners {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
