import React from 'react'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Copyright = () => {
  const appDomain = window === 'undefined' ? '' : window.location.hostname

  return (
    <Box mt={'auto'}>
      <Typography color="inherit">
        &copy; {new Date().getFullYear()}{' '}
        <Link href="#" color="inherit">
          {appDomain}
        </Link>
      </Typography>
    </Box>
  )
}

export default Copyright
