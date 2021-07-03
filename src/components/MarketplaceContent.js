import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import { Route, useRouteMatch } from 'react-router-dom'
import BrowseAll from './BrowseAll'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1
    }
  }
}))

const MarketplaceContent = () => {
  const classes = useStyles()
  const { path } = useRouteMatch()

  return (
    <Box className={classes.root}>
      <Route exact path={`${path}/browse-all`} component={BrowseAll} />
    </Box>
  )
}

export default MarketplaceContent
