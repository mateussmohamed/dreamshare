import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import HeroHeader from './index'

describe('[<HeroHeader />]', () => {
  const wrap = (props = {}) => shallow(<HeroHeader {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
