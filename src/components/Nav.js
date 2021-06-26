import React from 'react'
import { AppBar, Toolbar, Link, makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import NavLinks from './NavLinks'

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  logo: {
    color: 'inherit',
    '&:hover': {
      textDecoration: 'none'
    }
  }
}))

const Nav = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" component="h1">
          <Link className={classes.logo} href="/">
            Admin Panel
          </Link>
        </Typography>

        <NavLinks />
      </Toolbar>
    </AppBar>
  )
}

export default Nav
