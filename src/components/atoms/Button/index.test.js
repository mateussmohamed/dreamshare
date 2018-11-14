import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Button from './index'

describe('[<Button />]', () => {
  const wrap = (props = {}) => shallow(<Button {...props} />).dive()

  test('matches to snapshot', () => {
    const wrapper = wrap({ children: 'I am a Title' })

    expect(wrapper).toMatchSnapshot()
  })

  describe('when pass props', () => {
    test('primary', () => {
      const wrapper = wrap({ children: 'Primay Button', primary: true })

      expect(wrapper).toMatchSnapshot()
    })

    test('secondary', () => {
      const wrapper = wrap({ children: 'Secondary Button', secondary: true })

      expect(wrapper).toMatchSnapshot()
    })

    test('ghost', () => {
      const wrapper = wrap({ children: 'Ghot Button', ghost: true })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
