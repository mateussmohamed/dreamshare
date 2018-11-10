import React from 'react'
import { shallow } from 'enzyme'

import Logo from './index'

test('[<Logo />]', () => {
  const wrapper = shallow(<Logo />)

  expect(wrapper).toMatchSnapshot()
})
