import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import CallIcon from '@material-ui/icons/Call'

const useStyles = makeStyles((theme) => ({
  root: { margin: theme.spacing(2, 0) },
  contactTitleCtn: {
    padding: theme.spacing(2),
    background: theme.palette.grey[300],
    marginBottom: theme.spacing(2)
  },
  dataCtn: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  rowCtn: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1, 0)
  },
  dataLabelCtn: {
    width: '45%'
  },
  dataLabel: {
    fontWeight: theme.typography.fontWeightBold
  },
  dataValueCtn: {
    width: '45%',
    wordBreak: 'break-all'
  },
  dataValue: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& > svg': {
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(1)
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start'
    }
  }
}))

const UserContact = ({ email, contactNumber }) => {
  const classes = useStyles()
  return (
    <Box>
      <Box className={classes.contactTitleCtn}>
        <Typography>Contact Details</Typography>
      </Box>

      <Box className={classes.dataCtn}>
        <Box className={classes.rowCtn}>
          <Box className={classes.dataLabelCtn}>
            <Typography className={classes.dataLabel}>Email</Typography>
          </Box>
          <Box className={classes.dataValueCtn}>
            <Typography className={classes.dataValue}>
              <MailOutlineIcon />
              {email}
            </Typography>
          </Box>
        </Box>

        <Box className={classes.rowCtn}>
          <Box className={classes.dataLabelCtn}>
            <Typography className={classes.dataLabel}>
              Contact Number
            </Typography>
          </Box>
          <Box className={classes.dataValueCtn}>
            <Typography className={classes.dataValue}>
              <CallIcon />
              {contactNumber}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UserContact
