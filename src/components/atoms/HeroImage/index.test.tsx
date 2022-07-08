import React from 'react'

import { HeroImage } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<HeroImage />]', () => {
  const wrap = props => withThemeProvider(() => <HeroImage {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
