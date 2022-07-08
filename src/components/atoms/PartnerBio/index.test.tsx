import React from 'react'

import { PartnerBio } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<PartnerBio />]', () => {
  const wrap = props => withThemeProvider(() => <PartnerBio {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
