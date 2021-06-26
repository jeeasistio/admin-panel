import React from 'react'
import Box from '@material-ui/core/Box'

const Main = ({ children }) => {
  return (
    <Box component="main" minHeight={'80vh'}>
      {children}
    </Box>
  )
}

export default Main
