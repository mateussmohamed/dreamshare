import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import DreamshareTitle from './index'

describe('[<DreamshareTitle />]', () => {
  const wrap = (props = {}) => shallow(<DreamshareTitle {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
