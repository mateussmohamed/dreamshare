import React from 'react'

import { PartnerIcon } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<PartnerIcon />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <PartnerIcon icon="xpto" />)

    expect(wrapper).toMatchSnapshot()
  })
})
