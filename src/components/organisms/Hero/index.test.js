import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Hero from './index'

describe('[<Hero />]', () => {
  const wrap = (props = {}) => shallow(<Hero {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({
      title: 'Hero Title',
      description: 'hero description',
      srcImage: '',
    })

    expect(wrapper).toMatchSnapshot()
  })
})
