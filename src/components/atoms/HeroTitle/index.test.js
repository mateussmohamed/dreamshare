import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import HeroTitle from './index'

describe('[<HeroTitle />]', () => {
  const wrap = (props = {}) => shallow(<HeroTitle {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
