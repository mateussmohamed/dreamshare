import React from 'react'

import { Input } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Input />]', () => {
  const wrap = props => withThemeProvider(() => <Input {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({})

    expect(wrapper).toMatchSnapshot()
  })
})
