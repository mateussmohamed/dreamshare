import React from 'react'

import { HeroContainer } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<HeroContainer />]', () => {
  const wrap = props => withThemeProvider(() => <HeroContainer {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a container!' })

    expect(wrapper).toMatchSnapshot()
  })
})
