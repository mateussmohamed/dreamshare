import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import HowDreamshare from './index'

describe('[<HowDreamshare />]', () => {
  const wrap = (props = {}) => shallow(<HowDreamshare {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
