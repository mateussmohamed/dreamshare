import React from 'react'

import { Form } from './index'
import withThemeProvider from '../../theme/withThemeProvider'

describe('[<Form />]', () => {
  const wrap = props => withThemeProvider(() => <Form {...props} />)

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })
})
