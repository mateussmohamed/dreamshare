import React from 'react'
import { shallow } from 'enzyme'

import HeroImage from './index'

test('[<HeroImage />]', () => {
  const wrapper = shallow(<HeroImage />)

  expect(wrapper).toMatchSnapshot()
})
