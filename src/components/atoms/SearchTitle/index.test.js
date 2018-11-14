import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import SearchTitle from './index'

describe('[<SearchTitle />]', () => {
  const wrap = (props = {}) =>
    shallow(<SearchTitle {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
