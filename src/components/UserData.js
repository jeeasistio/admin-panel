import React from 'react'
import { Box, Typography, IconButton, makeStyles } from '@material-ui/core'
import { DateTime } from 'luxon'
import CallIcon from '@material-ui/icons/Call'
import LanguageIcon from '@material-ui/icons/Language'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'

const rows = [
  { id: 'gender', label: 'Gender' },
  { id: 'branch', label: 'Branch' },
  { id: 'department', label: 'Department' },
  { id: 'user_type', label: 'Type' },
  { id: 'birthdate', label: 'Birthdate' }
]

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0)
  },
  basicTitleCtn: {
    padding: theme.spacing(2),
    background: theme.palette.grey[300],
    marginBottom: theme.spacing(2)
  },
  basic: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  },
  avatarRoot: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up('sm')]: {
      width: '60%'
    }
  },
  avatarCtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarActionsCtn: {
    display: 'flex',
    marginTop: theme.spacing(1)
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
    textAlign: 'right',
    wordBreak: 'break-all',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'left'
    }
  }
}))

const UserData = ({ details }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.basicTitleCtn}>
        <Typography>Basic Data</Typography>
      </Box>

      <Box className={classes.basic}>
        <Box className={classes.avatarRoot}>
          <Box className={classes.avatarCtn}>
            <img width="50%" src="/person_icon.png" alt="avatar icon" />
          </Box>
          <Box className={classes.avatarActionsCtn}>
            <IconButton color="secondary">
              <CallIcon fontSize="large" />
            </IconButton>
            <IconButton color="secondary">
              <LanguageIcon fontSize="large" />
            </IconButton>
            <IconButton color="secondary">
              <ChatBubbleOutlineIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>

        <Box className={classes.dataCtn}>
          {rows.map((row) => {
            const date = DateTime.fromISO(details.birthdate).toLocaleString(
              DateTime.DATE_SHORT
            )

            return (
              <Box key={row.id} className={classes.rowCtn}>
                <Box className={classes.dataLabelCtn}>
                  <Typography className={classes.dataLabel}>
                    {row.label}
                  </Typography>
                </Box>
                <Box className={classes.dataValueCtn}>
                  <Typography>
                    {row.id === 'birthdate' ? date : details[row.id]}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default UserData
