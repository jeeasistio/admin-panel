import React from 'react'
import Box from '@material-ui/core/Box'
import Copyright from './Copyright'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    background: theme.palette.primary.dark,
    marginTop: theme.spacing(3),
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    }
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Box component="footer" className={classes.footer}>
      <Copyright />
    </Box>
  )
}

export default Footer
