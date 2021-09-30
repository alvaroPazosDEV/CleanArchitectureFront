const UserRepository = require('../../2. Application/contracts/UserRepository')

module.exports = class UserRepositoryService extends UserRepository {

  constructor() {
    super();
  }

  authenticate(username, password) {
    if(username.length > 4 && password.length > 4) return true
    return false 
  }

}