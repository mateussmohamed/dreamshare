import React from 'react'

import { PartnerName } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<PartnerName />]', () => {
  const wrap = props => withThemeProvider(() => <PartnerName {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'Your Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
