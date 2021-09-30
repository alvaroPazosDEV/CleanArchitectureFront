import { authConstants } from '../constants'

const login = user => ({
    type: authConstants.LOGIN,
    user
})

const logout = () => ({
    type: authConstants.LOGOUT
})

export const authActions = {
    login,
    logout
}
