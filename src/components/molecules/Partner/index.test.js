import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Partner from './index'

describe('[<Partner />]', () => {
  const wrap = (props = {}) => shallow(<Partner {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({
      name: 'Bradley Hunter',
      avatar: '/assets/images/partner-1.jpg',
      bio: 'Based in Chicago. I love playing tennis and loud music.',
      interests: 'music',
    })

    expect(wrapper).toMatchSnapshot()
  })
})
