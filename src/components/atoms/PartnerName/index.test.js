import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import PartnerName from './index'

describe('[<PartnerName />]', () => {
  const wrap = (props = {}) => shallow(<PartnerName {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'Your Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
