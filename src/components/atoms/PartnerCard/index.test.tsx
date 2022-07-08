import React from 'react'

import { PartnerCard } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<PartnerCard />]', () => {
  const wrap = props => withThemeProvider(() => <PartnerCard {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
