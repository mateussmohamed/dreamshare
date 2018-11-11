import React from 'react'
import { shallow } from 'enzyme'

import HeroDescription from './index'

test('[<HeroDescription />]', () => {
  const wrapper = shallow(<HeroDescription />)

  expect(wrapper).toMatchSnapshot()
})
