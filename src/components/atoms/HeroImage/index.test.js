import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import HeroImage from './index'

describe('[<HeroImage />]', () => {
  const wrap = (props = {}) => shallow(<HeroImage {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
