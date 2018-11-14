import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import StepDescription from './index'

describe('[<StepDescription />]', () => {
  const wrap = (props = {}) => shallow(<StepDescription {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am description' })

    expect(wrapper).toMatchSnapshot()
  })
})
