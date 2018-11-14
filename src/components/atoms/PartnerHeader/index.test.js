import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import PartnerHeader from './index'

describe('[<PartnerHeader />]', () => {
  const wrap = (props = {}) => shallow(<PartnerHeader {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
