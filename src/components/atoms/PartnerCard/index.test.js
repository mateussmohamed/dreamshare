import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import PartnerCard from './index'

describe('[<PartnerCard />]', () => {
  const wrap = (props = {}) => shallow(<PartnerCard {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
