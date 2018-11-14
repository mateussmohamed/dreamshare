import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import DiscoverTitle from './index'

describe('[<DiscoverTitle />]', () => {
  const wrap = (props = {}) => shallow(<DiscoverTitle {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
