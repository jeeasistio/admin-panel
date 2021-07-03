import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import UsersList from './components/UsersList'
import UsersInfo from './components/UsersInfo'
import Marketplace from './components/Marketplace'

export default function App() {
  return (
    <Switch>
      <Redirect from="/" to="/users" exact />
      <Route path="/users" exact component={UsersList} />
      <Route path="/user/:id" exact component={UsersInfo} />
      <Route path="/marketplace" component={Marketplace} />
    </Switch>
  )
}
