import React from 'react'

import { SearchPartners } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<SearchPartners />]', () => {
  const wrap = props => withThemeProvider(() => <SearchPartners {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
