module.exports = class AuthenticateUser {
  constructor(userRepository) {
    this.userRepository = userRepository
  }

  async authenticateUser (username, password) {
    const user = await this.userRepository.authenticate(username, password)
    return user
  }
}