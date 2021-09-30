import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const user = useSelector(state => state.authReducer.user)

  return (
    <Route {...rest} render={props => (
      user
        ? <Component {...rest} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
   )}/>
  )

}

export default PrivateRoute