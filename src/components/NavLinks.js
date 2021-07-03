import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { Box, Tooltip, IconButton } from '@material-ui/core'
import StorefrontIcon from '@material-ui/icons/Storefront'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'

const links = [
  {
    id: 'users_list',
    icon: <PeopleOutlineIcon />,
    title: 'Users list',
    path: '/users'
  },
  {
    id: 'marketplace',
    icon: <StorefrontIcon />,
    title: 'Marketplace',
    path: '/marketplace'
  }
]

const NavLinks = () => {
  const { path } = useRouteMatch()

  return (
    <Box>
      {links.map((link) => (
        <Tooltip key={link.id} title={link.title}>
          <IconButton
            component={NavLink}
            color={link.path === path ? 'default' : 'inherit'}
            to={link.path}
          >
            {link.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  )
}

export default NavLinks
