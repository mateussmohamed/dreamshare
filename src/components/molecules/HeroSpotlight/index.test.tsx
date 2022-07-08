import React from 'react'

import { HeroSpotlight } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<HeroSpotlight />]', () => {
  const wrap = props => withThemeProvider(() => <HeroSpotlight {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({
      title: 'Hero Title',
      description: 'hero description',
    })

    expect(wrapper).toMatchSnapshot()
  })
})
