import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import Layout from './Layout'
import UserActions from './UserActions'
import UserContact from './UserContact'
import UserData from './UserData'

const UsersInfo = () => {
  const router = useRouteMatch()
  const [details, setDetails] = useState({})

  useEffect(() => {
    fetch('/MOCK_DATA.json')
      .then((res) => res.json())
      .then((data) => {
        const user = data.filter((user) => user.id === router.params.id)
        setDetails(user[0])
      })
  }, [])

  return (
    <Layout containerWidth="lg">
      <UserActions fullName={details.full_name} userId={details.id} />
      <UserData details={details} />
      <UserContact
        email={details.email}
        contactNumber={details.contact_number}
      />
    </Layout>
  )
}

export default UsersInfo
