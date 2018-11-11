import React from 'react'
import { shallow } from 'enzyme'

import HomePage from '.'

test('[<HomePage />]', () => {
  const wrapper = shallow(<HomePage />)

  expect(wrapper).toMatchSnapshot()
})
