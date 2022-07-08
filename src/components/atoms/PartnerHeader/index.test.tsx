import React from 'react'

import { PartnerHeader } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<PartnerHeader />]', () => {
  const wrap = props => withThemeProvider(() => <PartnerHeader {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
