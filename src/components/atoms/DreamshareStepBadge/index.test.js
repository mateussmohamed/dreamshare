import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import DreamshareStepBadge from './index'

describe('[<DreamshareStepBadge />]', () => {
  const wrap = (props = {}) =>
    shallow(<DreamshareStepBadge {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am badge' })

    expect(wrapper).toMatchSnapshot()
  })
})
