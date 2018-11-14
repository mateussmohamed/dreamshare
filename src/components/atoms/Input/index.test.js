import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Input from './index'

describe('[<Input />]', () => {
  const wrap = (props = {}) => shallow(<Input {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
