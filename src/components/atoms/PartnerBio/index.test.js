import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import PartnerBio from './index'

describe('[<PartnerBio />]', () => {
  const wrap = (props = {}) => shallow(<PartnerBio {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
