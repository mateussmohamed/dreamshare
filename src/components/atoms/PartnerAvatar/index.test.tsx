import React from 'react'

import { PartnerAvatar } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<PartnerAvatar />]', () => {
  test('matches to snapshot', () => {
    const wrapper = withThemeProvider(() => <PartnerAvatar src="xpto" />)

    expect(wrapper).toMatchSnapshot()
  })
})
