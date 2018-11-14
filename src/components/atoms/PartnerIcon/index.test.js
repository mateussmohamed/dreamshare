import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import PartnerIcon from './index'

describe('[<PartnerIcon />]', () => {
  const wrap = (props = {}) => shallow(<PartnerIcon {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
