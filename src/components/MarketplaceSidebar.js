import React from 'react'
import {
  Box,
  Hidden,
  Typography,
  IconButton,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  makeStyles
} from '@material-ui/core'
import StorefrontIcon from '@material-ui/icons/Storefront'
import NotificationsIcon from '@material-ui/icons/Notifications'
import GroupIcon from '@material-ui/icons/Group'
import InboxIcon from '@material-ui/icons/Inbox'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonIcon from '@material-ui/icons/Person'
import SettingsIcon from '@material-ui/icons/Settings'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    borderRight: `0.5px solid ${theme.palette.grey[300]}`
  },
  sidebarNav: {
    padding: theme.spacing(2)
  },
  marketPlaceTitleCtn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
  },
  searchInput: {
    '& fieldset': {
      borderRadius: 50
    }
  },
  sidebarNavs: {
    marginBottom: theme.spacing(2)
  },
  filters: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  filterBtn: {
    textTransform: 'none'
  },
  filterTitle: {
    marginBottom: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold
  }
}))

const SIDEBARNAVS = [
  { id: 'browse_all', label: 'Browse All', icon: <StorefrontIcon /> },
  { id: 'groups', label: 'Groups', icon: <GroupIcon /> },
  { id: 'notifications', label: 'Notifications', icon: <NotificationsIcon /> },
  { id: 'inbox', label: 'Inbox', icon: <InboxIcon /> },
  { id: 'cart', label: 'Cart', icon: <ShoppingCartIcon /> },
  { id: 'your_account', label: 'Your Account', icon: <PersonIcon /> }
]

const MOCKFILTER = { location: 'Manila, Philippines', radius: 60 }

const CATEGORIES = [
  'Clothing and Accessories',
  'Electronics',
  'Family',
  'Home and Garden',
  'Vehicles',
  'Classifieds',
  'Deals',
  'Entertainment',
  'Hobbies',
  'Housing'
]

const MarketplaceSidebar = () => {
  const classes = useStyles()

  return (
    <Hidden xsDown>
      <Box className={classes.root}>
        <Box className={classes.sidebarNav}>
          <Box className={classes.marketPlaceTitleCtn}>
            <Box>
              <Typography variant="h5">Marketplace</Typography>
            </Box>
            <Box>
              <IconButton>
                <SettingsIcon />
              </IconButton>
            </Box>
          </Box>
          <Box>
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

        <Box className={classes.sidebarNavs}>
          <List>
            {SIDEBARNAVS.map((row) => (
              <ListItem key={row.id} button>
                <ListItemIcon>{row.icon}</ListItemIcon>
                <ListItemText>{row.label}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider variant="middle" />

        <Box className={classes.filters}>
          <Typography className={classes.filterTitle}>Filters</Typography>
          <Button className={classes.filterBtn} size="small">
            {MOCKFILTER.location} · Within {MOCKFILTER.radius} kilometers
          </Button>
        </Box>

        <Divider variant="middle" />

        <Box className={classes.filters}>
          <Typography className={classes.filterTitle}>Categories</Typography>
          <List>
            {CATEGORIES.map((row) => (
              <ListItem key={row.toLowerCase()} button>
                <ListItemText>{row}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Hidden>
  )
}

export default MarketplaceSidebar
