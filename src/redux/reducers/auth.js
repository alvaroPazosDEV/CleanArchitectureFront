import { authConstants } from '../constants'

const authReducer = (state={}, action) => {

  switch(action.type) {
    case authConstants.LOGIN:
      return {
        user: action.user
      }
    case authConstants.LOGOUT:
      return {}
    default:
      return state
  }

}

export default authReducer