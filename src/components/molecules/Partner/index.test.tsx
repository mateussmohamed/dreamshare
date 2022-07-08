import React from 'react'

import { Partner } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Partner />]', () => {
  const wrap = props => withThemeProvider(() => <Partner {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({
      name: 'Bradley Hunter',
      avatar: '/assets/images/partner-1.jpg',
      bio: 'Based in Chicago. I love playing tennis and loud music.',
      icon: 'music',
    })

    expect(wrapper).toMatchSnapshot()
  })
})
