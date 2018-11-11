import React from 'react'
import { shallow } from 'enzyme'

import Layout from '.'

test('[<Layout />]', () => {
  const wrapper = shallow(<Layout />)

  expect(wrapper).toMatchSnapshot()
})
