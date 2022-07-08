import React from 'react'

import { DreamshareStep } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<DreamshareStep />]', () => {
  const wrap = props => withThemeProvider(() => <DreamshareStep {...props} />)

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
