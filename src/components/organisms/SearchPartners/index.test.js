import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import SearchPartners from './index'

describe('[<SearchPartners />]', () => {
  const wrap = (props = {}) => shallow(<SearchPartners {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
