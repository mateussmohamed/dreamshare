import React from 'react'
import { shallow } from 'enzyme'

import Button from './index'

test('[<Button />]', () => {
  const wrapper = shallow(<Button />)

  expect(wrapper).toMatchSnapshot()
})
