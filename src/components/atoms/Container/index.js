import React from 'react'
import { Box } from '@rebass/grid'

const Container = props => (
  <Box
    mx="auto"
    css={{
      maxWidth: '1024px',
    }}
    {...props}
  />
)
export default Container
