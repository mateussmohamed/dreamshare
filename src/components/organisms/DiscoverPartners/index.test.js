import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import DiscoverPartners from './index'

describe('[<DiscoverPartners />]', () => {
  const wrap = (props = {}) => shallow(<DiscoverPartners {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
