import React from 'react'

import { Box } from '@rebass/grid'

export const Container = props => (
  <Box
    mx="auto"
    css={{
      maxWidth: '1024px',
    }}
    {...props}
  />
)
