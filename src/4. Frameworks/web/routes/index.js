import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import { history } from '../utils/history'

import Login from '../pages/Login'
import QueryOrder from '../pages/QueryOrder'
import Home from '../pages/Home'

import UserController from '../../../3. Adapters/controllers/UserController'
import OrderController from '../../../3. Adapters/controllers/OrderController'

const Routes = ({ dependencies }) => {

  const user = useSelector(state => state.authReducer.user)
  const userController = new UserController(dependencies.UserRepositoryService)
  const orderController = new OrderController(dependencies.OrderRepositoryService)

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path='/login' render={() => {
            return user ? <Redirect to='/inicio' /> : <Login userController={userController} />  
          }} />
          <PrivateRoute exact path='/inicio' component={Home} />
          <PrivateRoute exact path='/consultar-orden' orderController={orderController} component={QueryOrder} />
          <Redirect from='*' to='/login' />
        </Switch>
      </Router>
    </>
  )

}

export default Routes