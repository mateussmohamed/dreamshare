import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Footer from './index'

describe('[<Footer />]', () => {
  const wrap = (props = {}) => shallow(<Footer {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap()

    expect(wrapper).toMatchSnapshot()
  })
})
