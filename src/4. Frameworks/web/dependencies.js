const OrderRepositoryService = require('../services/OrderRepositoryService')
const UserRepositoryService = require('../services/UserRepositoryService')

module.exports = {
  OrderRepositoryService: new OrderRepositoryService(),
  UserRepositoryService: new UserRepositoryService()
}