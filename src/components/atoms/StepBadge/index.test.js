import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import StepBadge from './index'

describe('[<StepBadge />]', () => {
  const wrap = (props = {}) => shallow(<StepBadge {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am badge' })

    expect(wrapper).toMatchSnapshot()
  })
})
