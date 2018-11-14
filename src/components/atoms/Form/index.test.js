import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Form from './index'

describe('[<Form />]', () => {
  const wrap = (props = {}) => shallow(<Form {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
