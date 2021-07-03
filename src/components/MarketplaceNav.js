import React from 'react'
import {
  Box,
  Button,
  TextField,
  Divider,
  makeStyles,
  Hidden
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  root: {},
  buttonsCtn: {
    '& > button': {
      margin: theme.spacing(0, 1)
    }
  },
  userBtn: {
    borderRadius: 30
  },
  searchInput: {
    '& fieldset': {
      borderRadius: 50
    }
  }
}))

const MarketplaceNav = () => {
  const classes = useStyles()

  return (
    <Hidden smUp>
      <Box className={classes.root}>
        <Box mb={2}>
          <Box p={2} className={classes.buttonsCtn}>
            <Button variant="outlined" className={classes.userBtn}>
              <PersonIcon />
            </Button>
            <Button variant="outlined">Sell</Button>
            <Button variant="outlined">Categories</Button>
          </Box>
          <Box px={3} py={1}>
            <TextField
              className={classes.searchInput}
              size="small"
              fullWidth
              variant="outlined"
              label="What do you want to buy?"
              InputProps={{
                startAdornment: <SearchIcon color="action" />
              }}
            />
          </Box>
        </Box>
        <Divider variant="middle" />
      </Box>
    </Hidden>
  )
}

export default MarketplaceNav
