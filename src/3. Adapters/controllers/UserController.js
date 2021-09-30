const AuthenticateUser = require('../../2. Application/use_cases/AuthenticateUser')

module.exports = class UserController {

  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async authenticateUser (username, password) {
    const AuthenticateUserCommand = new AuthenticateUser(this.userRepository)
    const user = await AuthenticateUserCommand.authenticateUser(username, password)
    return user 
  }

}