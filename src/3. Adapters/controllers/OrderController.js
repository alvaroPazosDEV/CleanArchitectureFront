const GetOrder = require('../../2. Application/use_cases/GetOrder')

module.exports = class OrderController {

  constructor(orderRepository) {
    this.orderRepository = orderRepository
  }

  async getOrder (orderNumber) {
    const GetOrderCommand = new GetOrder(this.orderRepository)
    const order = await GetOrderCommand.getOrder(orderNumber)
    return order 
  }

}