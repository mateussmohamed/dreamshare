import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import HeroDescription from './index'

describe('[<HeroDescription />]', () => {
  const wrap = (props = {}) => shallow(<HeroDescription {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a description' })

    expect(wrapper).toMatchSnapshot()
  })
})
