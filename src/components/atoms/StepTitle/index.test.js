import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import StepTitle from './index'

describe('[<StepTitle />]', () => {
  const wrap = (props = {}) => shallow(<StepTitle {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
