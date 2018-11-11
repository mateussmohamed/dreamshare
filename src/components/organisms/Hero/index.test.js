import React from 'react'
import { shallow } from 'enzyme'

import Hero from './index'

test('[<Hero />]', () => {
  const wrapper = shallow(<Hero />)

  expect(wrapper).toMatchSnapshot()
})
