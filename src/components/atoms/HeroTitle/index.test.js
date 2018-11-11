import React from 'react'
import { shallow } from 'enzyme'

import HeroTitle from './index'

test('[<HeroTitle />]', () => {
  const wrapper = shallow(<HeroTitle />)

  expect(wrapper).toMatchSnapshot()
})
