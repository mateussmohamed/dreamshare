import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import PartnerBio from './index'

describe('[<PartnerBio />]', () => {
  const wrap = (props = {}) => shallow(<PartnerBio {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
