import React from 'react'

import styled from 'styled-components'

import { Footer } from '../../organisms'

const Wrapper = styled.div`
  display: block;
`

export const Page = ({ children }: { children: React.ReactNode }) => (
  <Wrapper>
    {children}
    <Footer />
  </Wrapper>
)
