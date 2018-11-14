import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import HeroSpotlight from './index'

describe('[<HeroSpotlight />]', () => {
  const wrap = (props = {}) => shallow(<HeroSpotlight {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({
      title: 'Hero Title',
      description: 'hero description',
    })

    expect(wrapper).toMatchSnapshot()
  })
})
