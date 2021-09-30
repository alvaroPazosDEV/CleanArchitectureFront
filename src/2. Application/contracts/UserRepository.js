module.exports = class UserRepository {

  constructor() {}

  authenticate(username, password) {
    return Promise.reject(new Error('Not implemented'))
  }

}