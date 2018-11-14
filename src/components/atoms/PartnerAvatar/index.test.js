import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import PartnerAvatar from './index'

describe('[<PartnerAvatar />]', () => {
  const wrap = (props = {}) => shallow(<PartnerAvatar {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
