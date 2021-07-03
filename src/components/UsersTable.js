import React from 'react'
import { Link } from 'react-router-dom'
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
  makeStyles
} from '@material-ui/core'
import { DateTime } from 'luxon'

const useStyles = makeStyles((theme) => ({
  tableRoot: {
    overflow: 'hidden'
  },
  head: {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  },
  hover: {
    textDecoration: 'none',
    '&:hover': {
      transform: 'scale(1.01)',
      transition: 'transform 0.1s ease-in-out'
    }
  }
}))

const COLUMNS = [
  { id: 'username', label: 'Username' },
  { id: 'full_name', label: 'Name' },
  { id: 'job_title', label: 'Job title' },
  { id: 'last_seen', label: 'Last seen' }
]

const UsersTable = ({
  users,
  page,
  rowsPerPage,
  totalUsers,
  setPage,
  setRowsPerPage
}) => {
  const classes = useStyles()

  const handlePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleRowsPerPage = (event) => {
    setRowsPerPage(event.target.value)
    setPage(0)
  }

  return (
    <Paper>
      <TableContainer>
        <Table className={classes.tableRoot}>
          <TableHead>
            <TableRow>
              {COLUMNS.map((col) => (
                <TableCell key={col.id} classes={{ head: classes.head }}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  component={Link}
                  classes={{ hover: classes.hover }}
                  hover={true}
                  to={`/user/${row.id}`}
                >
                  {COLUMNS.map((col) => {
                    const date = DateTime.fromISO(row[col.id]).toLocaleString(
                      DateTime.DATETIME_MED_WITH_WEEKDAY
                    )

                    return (
                      <TableCell key={col.id}>
                        {col.id === 'last_seen' ? date : row[col.id]}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPage={rowsPerPage}
                page={page}
                count={totalUsers}
                rowsPerPageOptions={[10, 15, 20, 30]}
                onChangePage={handlePage}
                onChangeRowsPerPage={handleRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default UsersTable
