import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import DreamshareStepDescription from './index'

describe('[<DreamshareStepDescription />]', () => {
  const wrap = (props = {}) =>
    shallow(<DreamshareStepDescription {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am description' })

    expect(wrapper).toMatchSnapshot()
  })
})
