import React from 'react'
import { Box, Button, Typography, makeStyles } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(2, 0)
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'stretch'
    }
  }
}))

const UserActions = ({ fullName, userId }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box>
        <Box mb={[1, 0]}>
          <Typography variant="h5">{fullName}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" color="textSecondary">
            id: {userId}
          </Typography>
        </Box>
      </Box>

      <Box className={classes.actions}>
        <Box mb={[1, 0]} mr={[0, 2]}>
          <Button color="secondary" href="/">
            Back to list of users
          </Button>
        </Box>

        <Box>
          <Button
            color="secondary"
            variant="contained"
            endIcon={<CreateIcon />}
          >
            Edit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default UserActions
