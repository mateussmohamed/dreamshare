import React from 'react'
import { shallow } from 'enzyme'

import Page from '.'

test('[<Page />]', () => {
  const wrapper = shallow(<Page />)

  expect(wrapper).toMatchSnapshot()
})
