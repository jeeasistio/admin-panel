import React, { useEffect, useState } from 'react'
import UsersTable from './UsersTable'
import { Box, makeStyles } from '@material-ui/core'
import TableInfo from './TableInfo'
import Layout from './Layout'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 0)
  }
}))

const UsersList = () => {
  const [users, setUsers] = useState([])
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [page, setPage] = useState(0)
  const classes = useStyles()

  useEffect(() => {
    fetch('/MOCK_DATA.json')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <Layout containerWidth="lg">
      <Box className={classes.root}>
        <TableInfo totalUsers={users.length} />
        <UsersTable
          users={users}
          page={page}
          rowsPerPage={rowsPerPage}
          totalUsers={users.length}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
        />
      </Box>
    </Layout>
  )
}

export default UsersList
