import React from 'react'
import { shallow } from 'enzyme'

import HeroHeader from './index'

test('[<HeroHeader />]', () => {
  const wrapper = shallow(<HeroHeader />)

  expect(wrapper).toMatchSnapshot()
})
