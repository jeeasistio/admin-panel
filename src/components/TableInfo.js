import { Box, Typography, makeStyles } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(2, 0)
  },
  totalUsers: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold
  }
}))

const TableInfo = ({ totalUsers }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.totalUsers}>
        <Box mr={0.5}>
          <PersonIcon />
        </Box>
        <Typography>{totalUsers} users</Typography>
      </Box>
    </Box>
  )
}

export default TableInfo
