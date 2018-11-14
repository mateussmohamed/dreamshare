import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import SearchDescription from './index'

describe('[<SearchDescription />]', () => {
  const wrap = (props = {}) => shallow(<SearchDescription {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a description' })

    expect(wrapper).toMatchSnapshot()
  })
})
