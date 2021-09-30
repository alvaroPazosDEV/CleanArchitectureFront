import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import { history } from '../utils/history'

import Login from '../pages/Login'
import QueryOrder from '../pages/QueryOrder'
import Home from '../pages/Home'

const Routes = ({ dependencies }) => {

  const user = useSelector(state => state.authReducer.user)

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path='/login' render={() => {
            return user ? <Redirect to='/inicio' /> : <Login />  
          }} />
          <PrivateRoute exact path='/inicio' component={Home} />
          <PrivateRoute exact path='/consultar-orden' component={QueryOrder} />
          <Redirect from='*' to='/login' />
        </Switch>
      </Router>
    </>
  )

}

export default Routes