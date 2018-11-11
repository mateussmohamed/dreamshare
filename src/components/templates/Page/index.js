import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: block;
`

const Page = ({ children }) => <Wrapper>{children}</Wrapper>

Page.propTypes = {
  children: PropTypes.node,
}

export default Page
