import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import StepCard from './index'

describe('[<StepCard />]', () => {
  const wrap = (props = {}) => shallow(<StepCard {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am card' })

    expect(wrapper).toMatchSnapshot()
  })
})
