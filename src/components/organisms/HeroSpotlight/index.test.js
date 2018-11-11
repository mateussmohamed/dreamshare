import React from 'react'
import { shallow } from 'enzyme'

import Spotlight from './index'

test('[<Spotlight />]', () => {
  const wrapper = shallow(<Spotlight />)

  expect(wrapper).toMatchSnapshot()
})
