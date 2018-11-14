import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import DreamshareStep from './index'

describe('[<DreamshareStep />]', () => {
  const wrap = (props = {}) => shallow(<DreamshareStep {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({
      badge: 'Step 1',
      title: 'Sed leo enim, condimentum',
      description: 'Quisque libero libero, ',
      image: '/assets/images/test.jpg',
    })

    expect(wrapper).toMatchSnapshot()
  })
})
